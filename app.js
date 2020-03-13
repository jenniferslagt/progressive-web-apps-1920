const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')
const fetch = require('node-fetch');

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))

// use use if you want to include a middleware
// set a static folder 
app.use(express.static(path.join(__dirname, "public")));

// Create a route which goes to a web page and has a GET request



app.get('/', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MOVIEDB_TOKEN}`)
        .then(async response => {
            const movieData = await response.json()
            console.log(__filename);

        })
})



// Use listen to run the webserver on a port 
// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// // .send is a method which gets send to the webpage. U can put html within it.
// app.get('/', function (req, res) {
//     res.send('HALLOOOOTJES')
// })



// -------- some notes

// middle ware functions are some functions that have access to the response and the request. U can change things and you can add some things