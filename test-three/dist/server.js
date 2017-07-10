'use strict';

var _server = require('react-dom/server');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// express is used to server assets and act as node server
var express = require('express');
var path = require('path');
var fs = require('fs');
var compression = require('compression');

var app = new express();
//enable gzip mode... file size will reduce to make load faster
app.use(compression());
// serve static assets from dist folder
app.use(express.static(path.join(__dirname, '../dist')));
//below function create a html page and serve the html for server side rendering
function createPage() {
  // read the json data from json file
  var initialState = fs.readFileSync(path.join(__dirname, '../src/data/menu-data.json'), 'utf-8');
  // create initial html page and load json data as initial state
  return '<!doctype html>' + (0, _server.renderToString)(_react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        'Moshtix'
      ),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('link', { href: 'app.css', rel: 'stylesheet' })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'main' }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.__PRELOADED_STATE__ = ' + JSON.stringify(initialState) + ';' } }),
      _react2.default.createElement('script', { src: 'app.js' })
    )
  ));
}

//when we get first request, return html page
app.get('/', function (req, res) {
  var html = createPage();
  res.send(html);
});

// start the server
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
app.listen(port, function (error) {
  if (error) {
    throw error;
  }
  console.log('Server started Listening on port ' + port);
});
