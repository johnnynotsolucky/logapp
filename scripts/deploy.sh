#!/bin/sh

npm run "build"

aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
aws s3 sync build/assets/ s3://$AWS_S3_BUCKET --delete
aws cloudfront create-invalidation --distribution-id $AWS_CF_DISTRIBUTION_ID --paths /rev-manifest.json
