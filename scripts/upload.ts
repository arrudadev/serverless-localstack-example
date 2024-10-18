import fs from 'node:fs'
import path from 'node:path'

import axios from 'axios'

async function uploadFile() {
  const fileContent = fs.readFileSync(
    path.resolve(__dirname, '..', 'assets', 'arrudadev.jpeg'),
    {
      encoding: 'base64',
    },
  )

  await axios.post(
    'http://localhost:3000/upload',
    {
      fileName: 'arrudadev.jpeg',
      fileContent,
      contentType: 'image/jpeg',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

uploadFile()
