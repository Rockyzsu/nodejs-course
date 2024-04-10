require("dotenv").config();
const axios = require("axios");

const OAuthClient = require("intuit-oauth");

const clientID = process.env.clientID;
const secret = process.env.secret;

const callback = "https://tayarlo-memberapi.demo4mlm.com/api/register/oauth/code/";

const returnURL =
  "https://tayarlo-memberapi.demo4mlm.com/api/register/oauth/code/?code=AB11712651060lYqVP6PgoUH2ffvK3iJRxXrOA1A2z0RHD17KZ&state=intuit-test&realmId=9341452096484047";
async function authDemo() {
  oauthClient = new OAuthClient({
    clientId: clientID,
    clientSecret: secret,
    environment: "development",
    redirectUri: callback,
  });

  const authUri = oauthClient.authorizeUri({
    scope: [OAuthClient.scopes.Accounting],
    state: "intuit-test",
  });

  console.log("authUri: ", authUri);
  //   const response = await axios.get(authUri);
  //   console.log(response.data);

  let authResponse = await oauthClient.createToken(returnURL);
  let oauth2_token_json = JSON.stringify(authResponse.json, null, 2);

  //   console.log(oauth2_token_json);
}

async function main() {
  await authDemo();
}
main();
