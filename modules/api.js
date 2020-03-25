const fetch = require('node-fetch');
const dotenv = require('dotenv').config();

async function getData(lat, long) {
    const url = process.env.API_URL
    const key = process.env.API_KEY
    // const lat = process.env.API_LAT
    // const long = process.env.API_LONG
    const api = `${url}/${key}/${lat},${long}`; // first number is latitude and the second is longitude

    const data = fetch(api)
        .then(response => {
            return response.json();
        })
        .then(results => {
            // console.log('data:', results.currently)
            return results
        });
    return data
        .catch(err => {
            console.log('it doesnt work')
        });
}



module.exports = {
    getData
};