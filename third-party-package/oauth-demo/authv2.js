const OoperatoOauthClient = require("axios-oauth-client");
const axios = require("axios");

operatohubAxiosHelper = async () => {
  // Define your OAuth 2.0 configuration

  const redirectUri = "";
  const scope = "warehouse";
  const state = "anything";

  // const authorizationUrl = `https://operatohub.com/domain/operato-dev-3/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}`;
  const authorizationUrl = `https://operatohub.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}`;
  console.log(authorizationUrl);
  const operatohubAccessTokenURL = "https://operatohub.com/oauth/access-token";
  const operatohubClientID = clientId;
  const getAuthorizationCode = OoperatoOauthClient.authorizationCode(
    axios.create(),
    operatohubAccessTokenURL, // OAuth 2.0 token endpoint
    operatohubClientID,
    operatohubClientSecret,
    process.env.redirectUri // Redirect URL for your app
  );

  const OperatohubAuth = await getAuthorizationCode(returnedCode, scope);

  console.log("authorizationUrl", authorizationUrl);
  console.log("authorizationCode", OperatohubAuth);

  return authorizationUrl;
};

async function checkResult() {
  const result = await operatohubAxiosHelper();
  console.log(result);
}

checkResult();
