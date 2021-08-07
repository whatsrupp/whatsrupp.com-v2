import { Stack, StackProps, Construct, Duration } from "@aws-cdk/core";
import {
  HostedZone,
  RecordSet,
  RecordType,
  RecordTarget
} from "@aws-cdk/aws-route53";
import {
  Certificate,
  CertificateValidation
} from "@aws-cdk/aws-certificatemanager";

import { Bucket } from "@aws-cdk/aws-s3";
import { Distribution, ViewerProtocolPolicy } from "@aws-cdk/aws-cloudfront";
import { S3Origin } from "@aws-cdk/aws-cloudfront-origins";

export default class WebsiteStack extends Stack {
  constructor(scope: Construct, stackId: string, props?: StackProps) {
    super(scope, stackId, props);

    this.main();
  }

  main() {
    const bucket = new Bucket(this, "websiteBucket", {
      bucketName: "whatsrupp-production",
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html"
    });

    const hostedZoneDomainName = this.node.tryGetContext(
      "hosted_zone_domain_name"
    );

    if (!hostedZoneDomainName) {
      throw new Error(
        "Missing context: 'hosted_zone_domain_name'. This is the domain name of the hosted zone you want to attach certificate verified subdomains to."
      );
    }

    const hostedZone = HostedZone.fromLookup(this, "hosted zone", {
      domainName: hostedZoneDomainName
    });

    const subdomains = ["www"];

    subdomains.forEach(subdomain => {
      const fqdn = `${subdomain}.${hostedZone.zoneName}`;
      const certificateName = fqdn.replace(/\.|\-/g, "-") + "-certificate";

      const certificate = new Certificate(this, certificateName, {
        domainName: fqdn,
        validation: CertificateValidation.fromDns(hostedZone)
      });

      const distribution = new Distribution(this, "websiteDistribution", {
        defaultBehavior: {
          origin: new S3Origin(bucket),
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS
        },
        domainNames: [fqdn],
        certificate: certificate
      });

      new RecordSet(this, "cname-record", {
        recordType: RecordType.CNAME,
        target: RecordTarget.fromValues(distribution.domainName),
        comment: "CNAME for whatsrupp website distribution url",
        zone: hostedZone,
        recordName: subdomain,
        ttl: Duration.minutes(60)
      });
    });
  }
}
