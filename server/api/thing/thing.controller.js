/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
  res.json([
  {
  name : 'Development Tools',
  info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
  name : 'Server and Client integration',
  info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
  name : 'Smart Build System',
  info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
  name : 'Modular Structure',
  info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
  name : 'Optimized Build',
  info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
  name : 'Deployment Ready',
  info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  }
  ]);
};
function timeFormatter(timeString){
    var timeArray = timeString.split('');
    var year = timeArray[0]+timeArray[1]+timeArray[2]+timeArray[3];
    var day = timeArray[4]+timeArray[5]+timeArray[6];
    var hour = timeArray[7]+timeArray[8];
    var minute = timeArray[9]+timeArray[10];
    var second = timeArray[11] + timeArray[12];
    return year + '-' + day + 'T' + hour + ':' + minute + ':' + second;
}

var myString = '2015183052624';

console.log(timeFormatter(myString));