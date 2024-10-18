BUCKET_NAME=localstack-example-bucket

aws --endpoint-url=http://localhost:4566 s3 mb s3://$BUCKET_NAME