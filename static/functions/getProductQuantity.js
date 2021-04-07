const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API 
const secret = (Buffer.from(GATSBY_SECRET_API).toString('base64'))
const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  const {id} = event.queryStringParameters
  let product

  try{
    product = await getProduct(id)
  }
  catch (err){
    return{
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message})
    }
  }

  return {
      statusCode: 200,
      body: JSON.stringify({data: product}),
  }
}

const getProduct = async function (id) {
  
  const res =   await fetch(`https://app.snipcart.com/api/products/${id}`, {
    headers: {
      Authorization: `Basic${secret}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  if (!res.ok){
    const message = `An error has occurred: ${res.status}`
    throw new Error(message)
  }

  const data = await res.json()

  return data
}
