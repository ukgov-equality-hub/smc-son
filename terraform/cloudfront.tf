
resource "aws_cloudfront_cache_policy" "cloudfront_cache_policy_for_elastic_beanstalk" {
  name = "${var.service_name_hyphens}--${var.environment_hyphens}-Cache-Policy"
  min_ttl = 0
  default_ttl = 60
  max_ttl = 600

  parameters_in_cache_key_and_forwarded_to_origin {
    cookies_config {
      cookie_behavior = "all"
    }
    headers_config {
      header_behavior = "whitelist"
      headers {
        items = ["Authorization"]
      }
    }
    query_strings_config {
      query_string_behavior = "all"
    }
  }
}

locals {
  distribution_for_elastic_beanstalk_environment__origin_id = "${var.service_name_hyphens}--${var.environment_hyphens}--Elastic-Beanstalk-origin"
}

resource "aws_cloudfront_distribution" "distribution_for_elastic_beanstalk_environment" {
  provider = aws.us-east-1

  comment = "${var.service_name_hyphens}--${var.environment_hyphens}"

  origin {
    domain_name = aws_elastic_beanstalk_environment.main_app_elastic_beanstalk_environment.cname
    origin_id = local.distribution_for_elastic_beanstalk_environment__origin_id

    custom_origin_config {
      http_port = 80
      https_port = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols = ["TLSv1.2"]
    }
  }

  price_class = "PriceClass_100"

  aliases = ["${var.dns_record_subdomain_including_dot}${data.aws_route53_zone.social_mobility_dot_data_dot_gov_dot_uk_zone.name}"]

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.certificate_validation_waiter.certificate_arn
    cloudfront_default_certificate = false
    minimum_protocol_version = "TLSv1"
    ssl_support_method = "sni-only"
  }

  enabled = true
  is_ipv6_enabled = true

  default_cache_behavior {
    cache_policy_id = aws_cloudfront_cache_policy.cloudfront_cache_policy_for_elastic_beanstalk.id
    allowed_methods = ["GET", "HEAD"]
    cached_methods = ["GET", "HEAD"]
    target_origin_id = local.distribution_for_elastic_beanstalk_environment__origin_id
    viewer_protocol_policy = "redirect-to-https"
    compress = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations = []
    }
  }
}
