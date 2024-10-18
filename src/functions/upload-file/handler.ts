import { APIGatewayProxyHandler } from 'aws-lambda'

import { S3 } from '../../lib/S3'
import { S3Service } from '../../services/s3/S3Service'

const s3Service = new S3Service(S3)

export const handler: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body as string)
  const fileContent = Buffer.from(body.fileContent, 'base64')

  await s3Service.uploadFile(
    'localstack-example-bucket',
    body.fileName,
    fileContent,
    body.contentType,
  )

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'File uploaded successfully' }),
  }
}
