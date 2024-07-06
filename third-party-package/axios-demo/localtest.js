const axios = require("axios");
// const FormData = require('form-data');
// let data = new FormData();
// data.append('productids', '[17, 19, 23, 21]');

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://guiyan-salesapi.demo4mlm.com/api/ecommerce/weights',
//   headers: {
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

axios
  .post(
    "https://guiyan-salesapi.demo4mlm.com/api/ecommerce/weights",
    { productids: JSON.stringify([1, 2, 3]) },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
