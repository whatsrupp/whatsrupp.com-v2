import { Stack, StackProps, Construct, Duration } from "@aws-cdk/core";
import { HostedZone, RecordSet, RecordType, RecordTarget } from "@aws-cdk/aws-route53";
import { Certificate, CertificateValidation } from "@aws-cdk/aws-certificatemanager";
import { PolicyStatement, Effect, ServicePrincipal, Role, CfnInstanceProfile } from "@aws-cdk/aws-iam";


export default class WebsiteStack extends Stack {

    constructor(scope: Construct, stackId: string, props?: StackProps) {

        super(scope, stackId, props);

        this.buildCertificates()
    }

    buildCertificates() {
        const hostedZoneDomainName = this.node.tryGetContext("hosted_zone_domain_name")
        if (!hostedZoneDomainName) {
            throw new Error("Missing context: 'hosted_zone_domain_name'. This is the domain name of the hosted zone you want to attach certificate verified subdomains to.")
        }

        const hostedZone = HostedZone.fromLookup(this, "hosted zone", {
            domainName: hostedZoneDomainName
        })

        const subdomains = ["www"]

        subdomains.forEach((subdomain) => {
            const fqdn = `${subdomain}.${hostedZone.zoneName}`
            const certificateName = fqdn.replace(/\.|\-/g, '-') + "-certificate"

            new Certificate(this, certificateName, {
                domainName: fqdn,
                validation: CertificateValidation.fromDns(hostedZone)
            })

            const accountsHubLoadBalancerUrl = this.node.tryGetContext("website-root-url")
            if (!accountsHubLoadBalancerUrl) {
                console.warn("Missing context: accounts_hub_load_balancer_url. No CNAME records will be made. This is the url that traffic through the accounts-hub subdomains will be redirected to. Example: accounts-hub-prod-3.eba-yswedqw6.eu-west-1.elasticbeanstalk.com")
            } else {
                new RecordSet(this, "accounts-hub-cname-record", {
                    recordType: RecordType.CNAME,
                    target: RecordTarget.fromValues(accountsHubLoadBalancerUrl),
                    comment: "CNAME for AccountsHub EB environment",
                    zone: hostedZone,
                    recordName: subdomain,
                    ttl: Duration.minutes(60)
                })
            }

        })
    }
}