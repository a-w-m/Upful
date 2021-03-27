/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

//script needed to append before </body>
const netlifyIdentityScript = `if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }`
  const netlifyIdentityScriptURL = "https://identity.netlify.com/v1/netlify-identity-widget.js"

// function that appends script to document.body
const addScript = (args) => {
  const {type, payload} = args
  const script = document.createElement("script")
  script.type = "text/javascript"

  if (type==="code") {
    script.appendChild(document.createTextNode(payload))
    document.body.appendChild(script)

  } else if (type==="url") {
    script.src = payload
    document.head.appendChild(script)

  }

}

//gatsby browser api function called on initial render of application
exports.onInitialClientRender = () => {
  addScript({type: "code", payload: netlifyIdentityScript})
  addScript({type: "url", payload: netlifyIdentityScriptURL})
}
