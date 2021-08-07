#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$BRANCH" != "master" ]]; then
  echo 'can only deploy on master branch';
  exit 1;
fi

if [[ $(git diff --stat) != '' ]]; then
  echo 'cannot deploy from a dirty repo, commit or remove changes and try again'
  exit 1;
fi


ACCOUNT_ID=$(aws sts get-caller-identity | jq -r .Account)

yarn build

BUCKET_NAME=whatsrupp-production

aws s3 sync $SCRIPT_DIR/../build s3://$BUCKET_NAME --delete

cd $SCRIPT_DIR/..
npm version patch
new_version=$(jq .version package.json)
git add package.json
git commit -m "bump version to ${new_version} [ci-skip]"
git push origin master