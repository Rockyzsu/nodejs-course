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
    const host = 'https://guiyan-deliveryapi.demo4mlm.com'
    const fee_url =  `${host}/api/deliveryItemPrice/getItemPrice?companyID=10003&country_id=1&state_id=2&total_weight=3.1`
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
        console.log(ret_obj['delivery_fee'].toFixed(2));
        console.log(typeof ret_obj['delivery_fee']);
    } catch (error) {
        console.error(error);
    }
}

// callback_method();
async_method();