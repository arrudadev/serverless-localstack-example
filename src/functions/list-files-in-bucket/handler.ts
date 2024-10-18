import { APIGatewayProxyHandler } from 'aws-lambda'

import { S3 } from '../../lib/S3'
import { S3Service } from '../../services/s3/S3Service'

const s3Service = new S3Service(S3)

export const handler: APIGatewayProxyHandler = async () => {
  const bucketName = 'localstack-example-bucket'
  const bucketContent = await s3Service.listBucketContents(bucketName)

  return {
    statusCode: 200,
    body: JSON.stringify({ bucketContent }),
  }
}
