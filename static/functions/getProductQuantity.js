const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API 

exports.handler = async function ({queryStringParameters}) {
  const {id} = queryStringParameters
  const product = await getProduct(id)
  
  return {
    statusCode: 200,
    body: JSON.stringify({message:"hello world!"})
  }
}

const getProduct = async function (id) {
  
  const res =   await fetch(`https://app.snipcart.com/api/products/${id}`, {
    headers: {
      Authorization: `Basic${btoa(GATSBY_SECRET_API)}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })

  const data  = res.json()
  return data
}
