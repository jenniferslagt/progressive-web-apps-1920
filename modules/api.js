const fetch = require('node-fetch');

async function getData() {
    const lat = '52.4968262'
    const long = '4.9597356'
    const api = `https://api.darksky.net/forecast/21282b7046eefae6d54cf3fa0cf9d8bc/${lat},${long}`; // first number is latitude and the second is longitude

    const data = await fetch(api)
        .then(response => {
            return response.json();
        })
        .then(results => {
            // console.log('data:', results.currently)
            return results
        })
    return data
    // .catch(err => {
    //     console.log('it doesnt work')
    // })

}

// getData().then(function (result) {
//     console.log('whut?', result)
// });




module.exports = {
    getData
};