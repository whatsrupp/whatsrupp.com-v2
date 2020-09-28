import { App } from "@aws-cdk/core";
import Stack from "./stack"; 

const app = new App({
    context: {
        hosted_zone_domain_name: "whatsrupp.com"
    }
})

new Stack(app, "whatsrupp.com", {
    description: `All cloud infrastructure supporting whatsrupp.com`
})