const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API_KEY 
const secret = (Buffer.from(GATSBY_SECRET_API).toString('base64'))
const fetch = require('node-fetch')
const { parseJsonText } = require('typescript')

exports.handler = async function (event, context){
    const body = JSON.parse(event.body)
    console.log(event.body, body)
    const fetchUrl = `${body.payload.url}/${body.payload.title}`

    fetch("https://app.snipcart.com/api/products", {
        method: "post",
        headers:{
            Authorization: `Basic ${secret}`,
            Accept: "application/json",
          },
        body: `{fetchUrl: ${fetchUrl}}`,
        
    })


}

