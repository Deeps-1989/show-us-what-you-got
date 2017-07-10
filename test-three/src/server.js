// express is used to server assets and act as node server
const express = require('express');
const path = require('path');
const fs = require('fs');
var compression = require('compression')
import {renderToString} from 'react-dom/server';
import React from 'react';
const app = new express();
//enable gzip mode... file size will reduce to make load faster
app.use(compression());
// serve static assets from dist folder
app.use(express.static(path.join(__dirname, '../dist')));
//below function create a html page and serve the html for server side rendering
function createPage() {
 // read the json data from json file
 var initialState = fs.readFileSync(path.join(__dirname,'../src/data/menu-data.json'), 'utf-8');
 // create initial html page and load json data as initial state
 return `<!doctype html>${renderToString(
   <html>
     <head>
       <title>Moshtix</title>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <link href="app.css" rel="stylesheet"/>
     </head>
     <body>
       <div id="main"/>
       <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(initialState)};` }}></script>
       <script src="app.js"></script>
     </body>
   </html>
 )}`;
}

//when we get first request, return html page
app.get('/', function(req,res) {
 var html = createPage();
 res.send(html);
});


// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, function(error){
    if(error) {
        throw error;
    }
    console.log(`Server started Listening on port ${port}`);
});
