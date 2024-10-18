# Serverless LocalStack Example

This project is a simple example to how to use LocalStack to simulate AWS Services.

## Requirements

To run this project you need to setup the following tools:

- [AWS CLI](https://aws.amazon.com/pt/cli/)
- [Node.js](https://nodejs.org/pt)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation 

Follow these instructions to run this project:

```
corepack enable
```

install dependencies

```
yarn install
```

run locally

```
yarn dev
```

run localStack using docker compose

```
docker compose up -d
```

to see the available services into localStack

```
curl http://localhost:4566/_localstack/health
```

if you have the `jq` installed you can format the output:

```
curl http://localhost:4566/_localstack/health | jq
```

create a test bucket into localStack

```
sh scripts/create-bucket-local.sh
```

now you can list the buckets by running:

```
curl http://localhost:3000/buckets
```

to upload a example file:

```
yarn file:upload
```

to list bucket content:

```
curl http://localhost:3000/files
```

to download a example file:

```
yarn file:download
```

## Using AWS

If you want to test using the AWS instead of the localStack, remove this code into the file `src/lib/s3.ts`

```
if (process.env.IS_OFFLINE) {
  config.endpoint = new aws.Endpoint('http://localhost:4566')
}
```

and run the script:

```
sh scripts/create-bucket-aws.sh
```

now you can test using the AWS directly.