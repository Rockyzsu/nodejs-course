const axios = require('axios');

function callback_method(){
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '',
    headers: { }
    };

    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
}

async function async_method(){
    const host = ''
    const fee_url =  `${host}/api/deliveryItemPrice/getItemPrice?companyID=10003&country=malaysia&state=kuala lumpur&total_weight=3.1`
    console.log(fee_url);
    try {
        const response = await axios.get(fee_url);
        if (response.status !== 200){
            console.log('error');
            return null;
        }
        // console.log(response.data)
        ret_obj = response.data;
        // console.log(resp_data);
        console.log(ret_obj.delivery_fee);
    } catch (error) {
        console.error(error);
    }
}

// callback_method();
async_method();