
locals {
  main_app_elastic_beanstalk_solution_stack_name = "64bit Amazon Linux 2 v3.5.0 running Python 3.8"
  main_app_elastic_beanstalk_ec2_instance_type = "t4g.micro"

  main_app_elastic_beanstalk_min_instances = 2
  main_app_elastic_beanstalk_max_instances = 8

  main_app_elastic_beanstalk_health_check_path = "/"  // Was "/health-check"
  main_app_elastic_beanstalk_health_check_matcher_code = 200
}

// An S3 bucket to store the code that is deployed by Elastic Beanstalk
resource "aws_s3_bucket" "main_app_elastic_beanstalk_code_s3_bucket" {
  bucket_prefix = lower("${var.service_name_hyphens}--${var.environment_hyphens}--S3-Beanstalk")
}

resource "aws_s3_bucket_acl" "main_app_elastic_beanstalk_code_s3_bucket_acl" {
  bucket = aws_s3_bucket.main_app_elastic_beanstalk_code_s3_bucket.id
  acl    = "private"
}

resource "aws_s3_bucket_public_access_block" "main_app_elastic_beanstalk_code_s3_bucket_public_access_block" {
  bucket = aws_s3_bucket.main_app_elastic_beanstalk_code_s3_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_elastic_beanstalk_application" "main_app_elastic_beanstalk_application" {
  name = "${var.service_name}__${var.environment}__Elastic_Beanstalk_Application"
}

data "aws_iam_instance_profile" "elastic_beanstalk" {
  name = "aws-elasticbeanstalk-ec2-role"
}

resource "aws_elastic_beanstalk_environment" "main_app_elastic_beanstalk_environment" {
  name                = "${var.service_name_hyphens}--${var.environment_hyphens}--EB-Env"
  application         = aws_elastic_beanstalk_application.main_app_elastic_beanstalk_application.name

  tier                = "WebServer"
  solution_stack_name = local.main_app_elastic_beanstalk_solution_stack_name
//  version_label       = aws_elastic_beanstalk_application_version.main_app_elastic_beanstalk_application_version__sample_app.name
  cname_prefix        = "${var.service_name_hyphens}--${var.environment_hyphens}"

  // See this documentation for all the available settings
  // https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options-general.html

  ///////////////
  // VPC
  setting {
    namespace = "aws:ec2:vpc"
    name      = "VPCId"
    value     = aws_vpc.vpc_main.id
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "Subnets"
    value     = join(",", [aws_subnet.vpc_main__public_subnet_az1.id, aws_subnet.vpc_main__public_subnet_az2.id])
  }
  
  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBSubnets"
    value     = join(",", [aws_subnet.vpc_main__public_subnet_az1.id, aws_subnet.vpc_main__public_subnet_az2.id])
  }
  
  setting {
    namespace = "aws:ec2:vpc"
    name      = "ELBScheme"
    value     = "public"
  }

  setting {
    namespace = "aws:ec2:vpc"
    name      = "AssociatePublicIpAddress"
    value     = true
  }

  /////////////////////
  // Instances
  setting {
    namespace = "aws:ec2:instances"
    name      = "InstanceTypes"
    value     = local.main_app_elastic_beanstalk_ec2_instance_type
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = data.aws_iam_instance_profile.elastic_beanstalk.name
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "SecurityGroups"
    value     = aws_security_group.security_group_main_app_instances.id
  }

  /////////////////////////
  // Load Balancer
  setting {
    namespace = "aws:elb:loadbalancer"
    name      = "SecurityGroups"
    value     = aws_security_group.security_group_main_app_load_balancer.id
  }

  setting {
    namespace = "aws:elb:loadbalancer"
    name      = "ManagedSecurityGroup"
    value     = aws_security_group.security_group_main_app_load_balancer.id
  }

  //////////////////////////////////
  // Load Balancer Listener
  setting {
    namespace = "aws:elbv2:listener:default"
    name      = "ListenerEnabled"
    value     = "true"  // was false // disabled. we create our own port 80 listener which redirects to https
  }

  // HTTPS secure listener config
//  setting {
//    namespace = "aws:elbv2:listener:443"
//    name      = "ListenerEnabled"
//    value     = "true"
//  }
//
//  setting {
//    namespace = "aws:elbv2:listener:443"
//    name      = "Protocol"
//    value     = "HTTPS"
//  }
//
//  setting {
//    namespace = "aws:elbv2:listener:443"
//    name      = "SSLCertificateArns"
//    value     = var.ELB_LOAD_BALANCER_SSL_CERTIFICATE_ARN
//  }
//
//  setting {
//    namespace = "aws:elbv2:listener:default"
//    name = "SSLPolicy"
//    value = "ELBSecurityPolicy-2016-08"
//  }

  ////////////////////////
  // Auto-scaling
  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MinSize"
    value     = local.main_app_elastic_beanstalk_min_instances
  }

  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MaxSize"
    value     = local.main_app_elastic_beanstalk_max_instances
  }

  /////////////////////////////////
  // Auto-scaling Triggers
  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "MeasureName"
    value     = "CPUUtilization"
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Statistic"
    value     = "Average"
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Unit"
    value     = "Percent"
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "Period"
    value     = 1  // Time (in minutes) between checks
                   // Note: remember to update the other settings
  }                // BreachDuration = Period * EvaluationPeriods

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "EvaluationPeriods"
    value     = 3  // Number of consecutive checks that must be too high/low to trigger a scaling action
                   // Note: remember to update the other settings
  }                // BreachDuration = Period * EvaluationPeriods

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "BreachDuration"
    value     = 3  // How long (in minutes) must the checks be toon high/low before scaling up/down
                   // Note: remember to update the other settings
  }                // BreachDuration = Period * EvaluationPeriods

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "UpperThreshold"
    value     = 80  // If the CPU % stays above this level, we scale up
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "UpperBreachScaleIncrement"
    value     = 1  // How many instances to add when we scale up
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "LowerThreshold"
    value     = 50  // If the CPU % stays below this level, we scale down
  }

  setting {
    namespace = "aws:autoscaling:trigger"
    name      = "LowerBreachScaleIncrement"
    value     = -1  // How many instances to ADD when we scale down
  }                 // (this needs to be a negative number so we scale down!)

  ///////////////////////
  // Deployments
  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "DeploymentPolicy"
    value     = "Rolling"
  }

  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "BatchSizeType"
    value     = "Fixed"
  }

  setting {
    namespace = "aws:elasticbeanstalk:command"
    name      = "BatchSize"
    value     = 1
  }

  //////////////////////////////////////////////
  // Rolling Updates (to configuration)
  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "RollingUpdateEnabled"
    value     = true
  }

  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "RollingUpdateType"
    value     = "Health"
  }

  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "MaxBatchSize"
    value     = 1
  }

  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "MinInstancesInService"
    value     = 1
  }

  setting {
    namespace = "aws:autoscaling:updatepolicy:rollingupdate"
    name      = "PauseTime"  // How long should we pause between finishing updating one batch and starting updating the next batch
    value     = "PT0S"  // PT0S means "0 seconds" https://en.wikipedia.org/wiki/ISO_8601#Durations
  }

  // HTTPS secure listener rules
//  setting {
//    namespace = "aws:elasticbeanstalk:environment:process:https"
//    name      = "HealthCheckPath"
//    value     = local.main_app_elastic_beanstalk_health_check_path
//  }
//
//  setting {
//    namespace = "aws:elasticbeanstalk:environment:process:https"
//    name      = "MatcherHTTPCode"
//    value     = local.main_app_elastic_beanstalk_health_check_matcher_code
//  }
//
//  setting {
//    namespace = "aws:elasticbeanstalk:environment:process:https"
//    name      = "Port"
//    value     = "443"
//  }
//
//  setting {
//    namespace = "aws:elasticbeanstalk:environment:process:https"
//    name      = "Protocol"
//    value     = "HTTPS"
//  }

  ///////////////////////////
  // Sticky Sessions
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "StickinessEnabled"
    value     = false
  }

  /////////////////////////
  // Health Checks
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckPath"
    value     = local.main_app_elastic_beanstalk_health_check_path
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckInterval"
    value     = 15
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthCheckTimeout"
    value     = 5
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "MatcherHTTPCode"
    value     = local.main_app_elastic_beanstalk_health_check_matcher_code
  }

  // Elastic beanstalk log config
  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "DeregistrationDelay"
    value     = 20
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "HealthyThresholdCount"
    value     = 3
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment:process:default"
    name      = "UnhealthyThresholdCount"
    value     = 5
  }

  //////////////////////
  // CloudWatch
  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name      = "RetentionInDays"
    value     = 7
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name      = "StreamLogs"
    value     = true
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs"
    name      = "DeleteOnTerminate"
    value     = false
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs:health"
    name      = "RetentionInDays"
    value     = 7
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs:health"
    name      = "HealthStreamingEnabled"
    value     = true
  }

  setting {
    namespace = "aws:elasticbeanstalk:cloudwatch:logs:health"
    name      = "DeleteOnTerminate"
    value     = false
  }

  /////////////////////////////////
  // Environment variables
  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "FLASK_APP"
    value     = "son"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "FLASK_ENV"
    value     = "production"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "VCAP_APPLICATION"
    value     = "{\"application_name\":\"${var.service_name_hyphens}\",\"organization_name\":\"equality-hub\",\"space_name\":\"${var.environment_hyphens}\"}"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "VCAP_SERVICES"
    value     = "{ \"aws-s3-bucket\": [{ \"credentials\": { \"aws_access_key_id\": \"TODO\", \"aws_region\": \"eu-west-2\", \"aws_secret_access_key\": \"TODO\", \"bucket_name\": \"TODO\" }, \"instance_name\": \"local-space-filestorage-enterprise-taskforce\" }]}"
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "SECRET_KEY"
    value     = var.SECRET_KEY
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "MAINTENANCE_MODE"
    value     = var.MAINTENANCE_MODE
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "BASIC_AUTH_USERNAME"
    value     = var.BASIC_AUTH_USERNAME
  }

  setting {
    namespace = "aws:elasticbeanstalk:application:environment"
    name      = "BASIC_AUTH_PASSWORD"
    value     = var.BASIC_AUTH_PASSWORD
  }
}
