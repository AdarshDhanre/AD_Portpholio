#!/bin/bash

BUCKET_NAME=port-45

echo "Deploying portfolio to S3..."
aws s3 sync /home/ec2-user/portfolio/ s3://$BUCKET_NAME/ --delete

echo "Deployment complete."
