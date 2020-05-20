#!/usr/bin/env bash

S3_BUCKET_NAME=$1
CF_ID=$(aws cloudfront list-distributions --output text --query "DistributionList.Items[].{Id:Id,Origin:Origins.Items[0].DomainName}[?contains(Origin,'${S3_BUCKET_NAME}')] | [0] | Id")

# Sync all files except for service-worker and index
echo "Uploading files to $S3_BUCKET_NAME..."
aws s3 sync public/ s3://$S3_BUCKET_NAME/ \
  --exclude "*.map"
  --exclude index.html \
  --cache-control max-age=31622400,public

# Upload index.html
echo "Uploading index.html"
aws s3 cp public/index.html s3://$S3_BUCKET_NAME/index.html \
  --metadata-directive REPLACE \
  --cache-control max-age=0,no-cache,no-store,must-revalidate \
  --content-type text/html

# Purge the cloudfront cache
echo "Purging the cache for CloudFront with ID $CF_ID"
aws cloudfront create-invalidation \
  --distribution-id $CF_ID \
  --paths "/*"
