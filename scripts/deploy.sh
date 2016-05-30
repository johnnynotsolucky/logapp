#!/bin/sh

branch=$(git symbolic-ref --short -q HEAD)
case "$branch" in
"master") 
    npm run "build"

    aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID
    aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY
    aws s3 sync build/app/ s3://$AWS_S3_BUCKET --delete
    
    aws configure set preview.cloudfront true
    aws cloudfront create-invalidation --distribution-id $AWS_CF_DISTRIBUTION_ID --paths /rev-manifest.json > /dev/null
    ;;
esac
