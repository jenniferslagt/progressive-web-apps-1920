# My App
![Schermafbeelding 2020-03-30 om 15 18 42](https://user-images.githubusercontent.com/45489420/77916707-c9d58d80-7299-11ea-903f-03540dac6ab6.png)

## Description
I made a server-side app in Node.js with the Express framework. I requested data from the Dark Sky API and rendered this on my pages via the EJS templates. The app is made for people who are looking for good surfspots in Europe, based on the weather. It shows the popular locations of surfspots and the corresponding weather at that moment! 

## What is Node.js?
Node.js is a open source JavaScript environment for easily building fast and scalable network applications. It's a platform for excuting JavaScript code to the server-side. It also lets developers use JavaScript to write command lines (for the terminal). So you have a JavaScript file in the root of your directory (mine is called 'server.js') which excecutes the code to the server-side. 

### How to install Node.js?
If you want to install Node.js, you'll need NPM. You can prefer this as "Node Package Manager". This doesn't stand for NPM, but you can consider this as what NPM is and does. 
You can install node.js by follow the steps on this site: https://nodejs.org/en/download/
You can also control your latest version of npm or node by running: 
`node --v` or `npm --v`.

## What is Express?
Express is a popular framework for Node.js that provides a set of features for making applications.
- It's a fast framework for Node.js
- It's server-side (or back-end)
- It makes handling requests simple with less code

### How to install Express?
With node.js, you can install some packages via NPM. Express is one of those packages.
You can install Express via your Terminal by running:
`npm install express --save`

Then you can import it in your server JS file with require:
`var express = require("express");`

## Using the EJS template
I used the EJS (Embedded JavaScript Template) template to render the data on my pages. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. I put the EJS files in the 'view' folder.

## The Dark Sky API
What is an API? Application programming interfaces (APIs) helps to make data available for extern users. In this way, you can request data to use it in different applications (like my page).
The Dark Sky API allows you to look up the weather anywhere on the globe, returning (where available).

## Conclusions <br>
I understand the difference between a client-side rendering and server-side. I understand how a service worker works and how criticial rendering works.

### Client-side rendering VS Server-side rendering: <br>
- Client-side rendered apps are rendering pages directly in the browsers by using JavaScript. Server-side rendered apps are running their code on a web server (before it's sent to the client). <br>
- Client-side development is more about interactively and displaying data (for example, adding a event to a button), while server-side is more about working behind the scene to manage data (for example, which data is rendered on which page).
- Client-side rendered apps are actually downloading all the files to your browser and then it executes that. So the site is'nt rendered until all the content is downloaded. Server-side rendered apps are rendering the entire page and then deliver the full page. <br>
- If you navigate to another page, client-side rendered apps are is going to the work all over again (download files and deliver it to the HTML). Server-side rendered apps are fetching only neccesary data. In short: client-side rendered apps are doing more "trips" to the server to get the data. <br>
- Server-side rendered apps are therefore faster than client side rendered apps, because they make less "trips" to the server. <br>
- It's CEO friendly (Google can "read" JavaScript). But server-side rendered apps are working better with the SEO. <br>

### A service worker <br>
- A service worker is a JavaScript file (service-worker.js) that runs seperately from the browser. It's a type of webworker. <br>
- It intercepts the network requests, it "saves" or retrieves data in the cache storage and it can deliver push messages. I used it to save the whole (!) request (at the first view of a page) in the cache storage.  <br>
- If you visit this page the second time, the saved data (of the request) is going to use to render this on the page. In this way, the request to the network is intercepted, because it's already saved on the cache storage! <br>
- So actually they can make your app work offline! For example, if you visit a page for the second time. <br>
- If I (a webdeveloper) update a page and an user has no network, it will show the "old" version of the page which is saved in the cache storage. But I the networks works, the data in the cache storage is also getting updated to newer version. you can check this on my application by inspecting the page and then go to application. On the left side you'll see the service-worker and the cache storage. <br>
- Before installing this, you have to register your service worker. 

### Criticial rendering <br>
- The criticial rendering path is what happens in the steps between receiving the HTML, CSS, and the JavaScript and the process to render this on the page.<br>
- By optimizing this path you can improve the time of rendering the page by the first view. In this way, you can show you rendered content in parts, instead of waiting untill everything is downloaded. I did this by minifying and compressing my code by using some npm packages. <br>
A visual presentation of (optimizing) rendering a page:
![progressive-rendering](https://user-images.githubusercontent.com/45489420/78039935-04f5c080-736f-11ea-9dc8-32aab7b8359f.png) <br>
"Optimizing the critical rendering path refers to prioritizing the display of content that relates to the current user action" - Ilya Grigorik. 


## Sources
- [Node.js Tutorial for Beginners: Learn Node in 1 Hour | Mosh](https://www.youtube.com/watch?v=TlB_eWDSMt4) <br>
[Express JS Crash Course](https://www.youtube.com/watch?v=L72fhGm1tfE) <br>
- [Intro To Service Workers & Caching](https://www.youtube.com/watch?v=ksXwaWHCW6k)  <br>
- [Client Side Rendering vs Server Side Rendering](https://dev.to/akhilaariyachandra/client-side-rendering-vs-server-side-rendering-2o4o/comments) <br>
- [Service Workers: an Introduction](https://developers.google.com/web/fundamentals/primers/service-workers)  <br>
- [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) <br>

## Credits
In the past weeks we all worked from home, because of the virus. This makes it harder to communicate and to concentrate on your work.
That's why I would like to thank my fellow students, the help students and the teachers for helping me during this time. 


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
