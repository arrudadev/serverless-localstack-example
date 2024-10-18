import fs from 'node:fs'
import path from 'node:path'

import axios from 'axios'

async function downloadFile() {
  const { data } = await axios.get(
    'http://localhost:3000/download?bucket=localstack-example-bucket&key=arrudadev.jpeg',
  )

  const buffer = Buffer.from(data.file, 'base64')
  const filePath = path.resolve(__dirname, '..', 'assets', 'arrudadev-2.jpeg')

  fs.writeFileSync(filePath, buffer)
}

downloadFile()
