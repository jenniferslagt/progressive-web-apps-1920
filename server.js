const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const revManifest = require('./static/rev-manifest')

const path = require('path');
const darkSkyData = require('./modules/api.js');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// set a static folder 
app.use(express.static(path.join(__dirname, "public")));

app.get('/', async (req, res) => {
    console.log('Getting the data..')
    const data = await darkSkyData.getData()
    const locations = require('./modules/locations.json')

    res.render('index.ejs', {
        timezone: data.timezone,
        locations: locations
    });
});

app.get('/details/:lat/:long', async (req, res) => {
    const lat = req.params.lat;
    const long = req.params.long;

    const data = await darkSkyData.getData(lat, long);
    const locations = require('./modules/locations.json');

    console.log('nu', data.currently)

    res.render('details', {
        timezone: data.timezone,
        summary: data.currently.summary,
        temperature: data.currently.temperature,
        windSpeed: data.currently.windSpeed,
        uvIndex: data.currently.uvIndex,
        cloudCover: data.currently.cloudCover
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));