import { App } from "@aws-cdk/core";
import Stack from "./stack";

const app = new App({
  context: {
    hosted_zone_domain_name: "nickrupp.co.uk"
  }
});

const accountId = process.argv[1];

if (!accountId) {
  throw new Error("Missing AWS Account Id cli argument");
}
new Stack(app, "whatsrupp-website", {
  description: `All cloud infrastructure supporting whatsrupp.com`,
  env: {
    account: accountId,
    region: "us-east-1"
    // would prefer to use London but cloudfront requires a certificate in N.Virginia
    // https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-and-https-requirements.html
  }
});
