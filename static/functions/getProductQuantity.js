const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API 
const secret = (Buffer.from(GATSBY_SECRET_API).toString('base64'))
const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  // const product = await getProduct(id)
  
  return {
    statusCode: 200,
    body: JSON.stringify({message:"hello world!"})
  }
}

// const getProduct = async function (id) {
  
//   const res =   await fetch(`https://app.snipcart.com/api/products/${id}`, {
//     headers: {
//       Authorization: `Basic${secret}`,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })

//   const data  = res.json()
//   return data
// }
