const GATSBY_SECRET_API = process.env.GATSBY_SECRET_API_KEY 
const secret = (Buffer.from(GATSBY_SECRET_API).toString('base64'))
const fetch = require('node-fetch')

exports.handler = async function (event, context){

    const body = JSON.parse(event.body)
    const arr = body.payload.title.split(" ")
    const slug = arr[arr.length-1]
    const fetchUrl = `${body.payload.ssl_url}/${slug}`
    console.log(fetchUrl)


    fetch("https://app.snipcart.com/api/products", {
        method: "post",
        headers:{
            Authorization: `Basic ${secret}`,
            Accept: "application/json",
          },
        body: `{fetchUrl:${fetchUrl}}`,
        
    }).then(res=>{
        res.json()
    }).then(json=>{
        console.log(json)
    })


}

