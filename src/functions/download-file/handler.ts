import { APIGatewayProxyHandler } from 'aws-lambda'

import { S3 } from '../../lib/S3'
import { S3Service } from '../../services/s3/S3Service'

const s3Service = new S3Service(S3)

export const handler: APIGatewayProxyHandler = async (event) => {
  const { bucket, key } = event.queryStringParameters as {
    bucket: string
    key: string
  }

  const file = await s3Service.downloadFile(bucket, key)

  const fileConvertedToBase64 = file.Body?.toString('base64')

  return {
    statusCode: 200,
    body: JSON.stringify({ file: fileConvertedToBase64 }),
  }
}
