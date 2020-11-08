#!/bin/bash

ACCOUNT_ID=$(aws sts get-caller-identity | jq -r .Account)
BUCKET_NAME=whatsrupp-production
aws s3 sync ../build s3://$BUCKET_NAME --delete

