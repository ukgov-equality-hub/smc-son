
data "aws_route53_zone" "social_mobility_dot_data_dot_gov_dot_uk_zone" {
  name         = "social-mobility.data.gov.uk."
}

data "aws_elastic_beanstalk_hosted_zone" "elastic_beanstalk_dns_zone" {
}

resource "aws_route53_record" "dns_alias_record" {
  count = var.create_dns_record ? 1 : 0  // Only create this DNS record if "var.create_dns_record" is true

  zone_id = data.aws_route53_zone.social_mobility_dot_data_dot_gov_dot_uk_zone.zone_id
  name    = "${var.dns_record_subdomain_including_dot}${data.aws_route53_zone.social_mobility_dot_data_dot_gov_dot_uk_zone.name}"
  type    = "A"

  alias {
    evaluate_target_health = false
    name = aws_elastic_beanstalk_environment.main_app_elastic_beanstalk_environment.cname
    zone_id = data.aws_elastic_beanstalk_hosted_zone.elastic_beanstalk_dns_zone.id
  }
}
