#!/bin/bash

diff() {
    ACCOUNT_ID="$(aws sts get-caller-identity | jq -r .Account)"
    echo $ACCOUNT_ID
    export AWS_ACCOUNT_ID=$ACCOUNT_ID && npm run cdk diff -- --strict --require-approval never --app='ts-node bin.ts' 
}

deploy() {
    ACCOUNT_ID="$(aws sts get-caller-identity | jq -r .Account)"
    export AWS_ACCOUNT_ID=$ACCOUNT_ID && npm run cdk deploy -- --strict --require-approval never --app='ts-node bin.ts' 
}

synth() {
    ACCOUNT_ID="$(aws sts get-caller-identity | jq -r .Account)"
    export AWS_ACCOUNT_ID=$ACCOUNT_ID && npm run cdk synth -- --strict --require-approval never --app='ts-node bin.ts' 
}