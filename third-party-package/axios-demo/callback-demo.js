const axios = require("axios");
axios.get("https://api.github.com/users/jisaacks/orgs").then((resp) => {
  const data = resp.data;
  console.log(data);
});
