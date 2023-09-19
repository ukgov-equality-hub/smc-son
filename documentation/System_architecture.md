
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
System architecture

# System architecture

The website is hosted on AWS, there is a [dev](https://dev.social-mobility.data.gov.uk/) and [prod](https://social-mobility.data.gov.uk/) environment. The current features are used:

* Route 53 to manage the domain name
* Elastic beanstalk
* EC2
* Load balancers
* Virtual private cloud
* S3

This is managed via Terraform

Please ask your manager for access to the AWS account.

# Terraform

Terraform files are stored in the `/terraform` folder.

# CI/CD & GitHub workflows

CI/CD is managed through GitHub Actions. Workflow files are located in the `/.github/workflows/` folder.

* **_build-and-deploy-shared.yml** is used by both dev and production deployment, the file fires up the Terraform scripts to push the code tp AWS
* **build-and-deploy-dev.yml** and **build-and-deploy-prod.yml** pushes code to either the dev or production AWS environments
* **codeql-analysis.yml** scans the code for code quality
* **maintenance-mode.yml** allows dev or production site to be put into or out of maintenance mode
* **trivy-scan.yml** employs Trivy to scan the code base for vulnerabilities, erroneous password
