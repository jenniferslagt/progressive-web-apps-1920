const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')
const darkSkyData = require('./modules/api.js');

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {

    // The render method takes the name of the HTML 
    // page to be rendered as input 
    // This page should be in the views folder 
    // in the root directory. 
    res.render('index', {
        data: darkSkyData
    });

});

// use use if you want to include a middleware
// set a static folder 
app.use(express.static(path.join(__dirname, "public")));

// Use listen to run the webserver on a port 
// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// .send is a method which gets send to the webpage. U can put html within it.
app.get('/', function (req, res) {
    res.send('HALLOOOOTJES')
    console.log("hain")
})