const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API_KEY
const secret = Buffer.from(GATSBY_SECRET_API).toString("base64")
const fetch = require("node-fetch")

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const commitMsgArray = splitCommitMsg(body)

  if (isNewProduct(commitMsgArray)) {
    const slug = getProductSlug(commitMsgArray)
    const fetchBody = reqBody(body, slug)

    try {
      res = await PostProduct(fetchBody)
    } catch (err) {
      return {
        statusCode: err.statusCode || 500,
        body: JSON.stringify({ error: err.message }),
      }
    }
    return {
      statusCode: 200,
      body: "Product Sent to Inventory Dashboard",
    }
  }
}

const splitCommitMsg = body => {
  return body.payload.title.split(" ")
}

const isNewProduct = arr => {
  return arr.length > 1 && arr[0] === "CMS" && arr[1] === "Create"
}

const getProductSlug = arr => {
  return arr[arr.length - 1]
}

const reqBody = (body, slug) => {
  const fetchUrl = `${body.payload.deploy_ssl_url}/${slug}`
  return `{fetchUrl: '${fetchUrl}'}`
}

const PostProduct = async body => {
  const result = await fetch("https://app.snipcart.com/api/products", {
    method: "POST",
    headers: {
      Authorization: `Basic ${secret}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  })

  if (!result.ok) {
    const err = new Error(`An error has occurred: ${result.status}`)
    err.statusCode = result.status
    throw err
  }

  return await result.json()
}
