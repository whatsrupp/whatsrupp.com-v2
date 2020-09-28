#!/bin/bash

ACCOUNT_ID=$(aws sts get-caller-identity | jq -r .Account)
NAME=whatsrupp-production
aws s3 cp index.html s3://$NAME

