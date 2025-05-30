
variable "service_name" {
  type = string
  description = "The short name of the service."
  default = "smc_son"
}

variable "service_name_hyphens" {
  type = string
  description = "The short name of the service (using hyphen-style)."
  default = "smc-son"
}

variable "environment" {
  type = string
  description = "The environment name."
}

variable "environment_hyphens" {
  type = string
  description = "The environment name (using hyphen-style)."
}

variable "create_dns_record" {
  type = bool
  description = "Should terraform create a Route53 alias record for the (sub)domain."
}

variable "dns_record_subdomain_including_dot" {
  type = string
  description = "The subdomain (including dot - e.g. 'dev.' or just '' for production) for the Route53 alias record"
}

variable "prevent_email_spoofing" {
  type = bool
  description = "Should terraform create DNS records to prevent email spoofing (only required for the prod environment)"
  default = false
}

variable "aws_region" {
  type = string
  description = "The AWS region used for the provider and resources."
  default = "eu-west-2"
}

// Elastic Beanstalk environment variables - used by the application code
// These variables are set in GitHub Actions environment-specific secrets - e.g.
variable "SECRET_KEY" {
  type = string
}
variable "MAINTENANCE_MODE" {
  type = string
  default = "OFF"
}
variable "BASIC_AUTH_USERNAME" {
  type = string
  default = ""
}
variable "BASIC_AUTH_PASSWORD" {
  type = string
  default = ""
}
variable "GOV_UK_NOTIFY_API_KEY" {
  type = string
}
variable "NOTIFY_OVERRIDE_EMAIL" {
  type = string
  default = ""
}
