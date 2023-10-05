
data "aws_route53_zone" "social_mobility_dot_data_dot_gov_dot_uk_zone" {
  name         = "social-mobility.data.gov.uk."
}

resource "aws_route53_record" "dns_alias_record" {
  count = var.create_dns_record ? 1 : 0  // Only create this DNS record if "var.create_dns_record" is true

  zone_id = data.aws_route53_zone.social_mobility_dot_data_dot_gov_dot_uk_zone.zone_id
  name    = "${var.dns_record_subdomain_including_dot}${data.aws_route53_zone.social_mobility_dot_data_dot_gov_dot_uk_zone.name}"
  type    = "A"

  alias {
    evaluate_target_health = false
    name = aws_cloudfront_distribution.distribution_for_elastic_beanstalk_environment.domain_name
    zone_id = aws_cloudfront_distribution.distribution_for_elastic_beanstalk_environment.hosted_zone_id
  }
}
