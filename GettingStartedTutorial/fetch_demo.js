import fetch from 'node-fetch'

function makeRequest(url, callback) {
    // Make a network request

    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error(error));
  }
  

//   var url = 'https://api.ipify.org/?format=json'
  var url = 'http://127.0.0.1:8000/ip'

  makeRequest(url, function(data) {
    console.log(data);
    var ip = data.ip||'unknown';
    console.log(ip)
  });