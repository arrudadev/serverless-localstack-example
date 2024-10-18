import aws from 'aws-sdk'

const config: aws.S3.ClientConfiguration = {
  s3ForcePathStyle: true,
}

if (process.env.IS_OFFLINE) {
  config.endpoint = new aws.Endpoint('http://localhost:4566')
}

export const S3 = new aws.S3(config)
