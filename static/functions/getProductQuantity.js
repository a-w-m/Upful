const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API 
const secret = (Buffer.from(GATSBY_SECRET_API).toString('base64'))
const fetch = require('node-fetch')

exports.handler = async function (event, context) {
  let res
  let inventory

  try{
    res = await fetchAllProducts()
    if (res.items){
    inventory = createInventory(res.items)
    }

  }
  catch (err){
    return{
      statusCode: err.statusCode || 500,
      body: JSON.stringify({error: err.message})
    }
  }

  return {
      statusCode: 200,
      body: JSON.stringify(inventory),
  }
}

const fetchAllProducts = async function () {

  
  const result =   await fetch(`https://app.snipcart.com/api/products/`, {
    headers: {
      Authorization: `Basic ${secret}`,
      Accept: "application/json"
    },
  })

  if (!result.ok){
    const err = new Error(`An error has occurred: ${result.status}`)
    err.statusCode = result.status
    throw err

  }

  return await result.json()

}

const createInventory = (data) =>{
  let res = {}
  
 data.forEach(product =>{
   if(product.stock){
    res[product.userDefinedId] = {stock: product.stock}
  }
    else {
      res[product.userDefinedId] = {stock: 0}
    }

 })

 return res

}