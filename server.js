const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')
const darkSkyData = require('./modules/api.js');

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// set a static folder 
app.use(express.static(path.join(__dirname, "public")));

app.get('/', async (req, res) => {
    const data = await darkSkyData.getData()

    res.render('index', {
        timezone: data.timezone,
        summary: data.currently.summary
    });

});


app.get('/details', async (req, res) => {
    const data = await darkSkyData.getData()
    console.log('daaataa', data)
    res.render('details', {
        timezone: data.timezone,
        summary: data.currently.summary,
        // temperature: data.currenly.temperature
    });

});





// // .send is a method which gets send to the webpage. U can put html within it.
// app.get('/', function (req, res) {
//     res.send('HALLOOOOTJES')
//     console.log("hain")
// })