import aws from 'aws-sdk'

export class S3Service {
  constructor(private s3Service: aws.S3) {}

  async listBuckets() {
    return this.s3Service.listBuckets().promise()
  }

  async uploadFile(
    bucket: string,
    key: string,
    body: Buffer,
    contentType: string,
  ) {
    return this.s3Service
      .putObject({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
      })
      .promise()
  }

  async listBucketContents(bucket: string) {
    return this.s3Service
      .listObjectsV2({
        Bucket: bucket,
      })
      .promise()
  }

  async downloadFile(bucket: string, key: string) {
    return this.s3Service
      .getObject({
        Bucket: bucket,
        Key: key,
      })
      .promise()
  }
}
