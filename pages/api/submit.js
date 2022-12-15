// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from '../../lib/mongo'

export default async function handler(req, res) {
  const data = req.body
  console.log('Server received data', data)

  const db = await client
  const database = db.db('myFormData')
  const collection = database.collection('results')
  const result = await collection.insertOne(data)

  console.log('Saved to Mongo:', result)
  res.status(200).json(result)
}
