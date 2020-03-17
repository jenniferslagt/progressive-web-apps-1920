const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')
const darkSkyData = require('./modules/api.js');

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

// solve the Promise with .then
const data = darkSkyData.getData()
    .then(function (results) {
        // console.log(data)
        return data
    });

app.get('/', (req, res) => {
    res.render('index', {
        data
    });

});

// set a static folder 
app.use(express.static(path.join(__dirname, "public")));


// .send is a method which gets send to the webpage. U can put html within it.
app.get('/', function (req, res) {
    res.send('HALLOOOOTJES')
    console.log("hain")
})