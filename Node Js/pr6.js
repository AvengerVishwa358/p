Aim : Explore the npm package axios to Fetch Data from an API.

const axios = require('axios');

constapiurl = 'https://samples-files.com/samples/code/json/sample1.json';

axios.get(apiURL)

.then(responce => {
    console.log("Data Received from API:");

    console.log(Response.data);
})

.catch(error => {

  console.log("Error occured while fetching data");

  console.log(error.message);

});
