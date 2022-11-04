import json
import os
from typing import List


class VcapApplication:
    application_name: str
    organization_name: str
    space_name: str

    def __init__(self, vcap_application_object: str):
        self.application_name = vcap_application_object['application_name']
        self.organization_name = vcap_application_object['organization_name']
        self.space_name = vcap_application_object['space_name']


class VcapServicesAwsS3BucketCredentials:
    aws_access_key_id: str
    aws_region: str
    aws_secret_access_key: str
    bucket_name: str

    def __init__(self, vcap_services_awss3bucket_credentials_object):
        self.aws_access_key_id = vcap_services_awss3bucket_credentials_object['aws_access_key_id']
        self.aws_region = vcap_services_awss3bucket_credentials_object['aws_region']
        self.aws_secret_access_key = vcap_services_awss3bucket_credentials_object['aws_secret_access_key']
        self.bucket_name = vcap_services_awss3bucket_credentials_object['bucket_name']


class VcapServicesAwsS3Bucket:
    credentials: VcapServicesAwsS3BucketCredentials
    instance_name: str

    def __init__(self, vcap_services_awss3bucket_object):
        self.instance_name = vcap_services_awss3bucket_object['instance_name']
        self.credentials = VcapServicesAwsS3BucketCredentials(vcap_services_awss3bucket_object['credentials'])


class VcapServicesPostgresCredentials:
    host: str
    database_name: str
    password: str
    port: int
    username: str

    def __init__(self, vcap_services_postgres_credentials_object):
        self.host = vcap_services_postgres_credentials_object['host']
        self.database_name = vcap_services_postgres_credentials_object['name']
        self.password = vcap_services_postgres_credentials_object['password']
        self.port = vcap_services_postgres_credentials_object['port']
        self.username = vcap_services_postgres_credentials_object['username']


class VcapServicesPostgres:
    application_name: str
    credentials: VcapServicesPostgresCredentials

    def __init__(self, vcap_services_postgres_object):
        self.instance_name = vcap_services_postgres_object['instance_name']
        self.credentials = VcapServicesPostgresCredentials(vcap_services_postgres_object['credentials'])


class VcapServices:
    aws_s3_bucket: List[VcapServicesAwsS3Bucket] = []
    postgres: List[VcapServicesPostgres] = []

    def __init__(self, vcap_services_object):
        if 'aws-s3-bucket' in vcap_services_object:
            for aws_s3_bucket in vcap_services_object['aws-s3-bucket']:
                self.aws_s3_bucket.append(VcapServicesAwsS3Bucket(aws_s3_bucket))

        if 'postgres' in vcap_services_object:
            for postgres in vcap_services_object['postgres']:
                self.postgres.append(VcapServicesPostgres(postgres))


class ConfigHelper:
    @staticmethod
    def get_vcap_application() -> VcapApplication:
        vcap_application_string = os.environ.get("VCAP_APPLICATION")
        if vcap_application_string is not None:
            vcap_application_object = json.loads(vcap_application_string)
            return VcapApplication(vcap_application_object)

    @staticmethod
    def get_vcap_services() -> VcapServices:
        vcap_services_string = os.environ.get("VCAP_SERVICES")
        if vcap_services_string is not None:
            vcap_services_object = json.loads(vcap_services_string)
            return VcapServices(vcap_services_object)
