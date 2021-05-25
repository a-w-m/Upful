const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API_KEY
const secret = Buffer.from(GATSBY_SECRET_API).toString("base64")
const fetch = require("node-fetch")

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const arr = body.payload.title.split(" ")
  const slug = arr[arr.length - 1]
  const fetchUrl = `${body.payload.deploy_ssl_url}/${slug}`
  console.log(fetchUrl, body)
  const raw = { fetchUrl }

  return fetch("https://app.snipcart.com/api/products", {
    method: "POST",
    headers: {
      Authorization: `Basic ${secret}`,
      Accept: "application/json",
    },
    body: JSON.stringify(raw),
  })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      return result
    })
    .then(result => ({
      statusCode: 200,
      body: "Product Sent to Inventory Dashboard",
    }))
    .catch(error => console.log("error", error))

  console.log("TEST")
}
