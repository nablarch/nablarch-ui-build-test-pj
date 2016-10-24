'use strict';

var fs   = require('fs')
  , path = require('path')
  , libDirs = [
      'jsp/taglib'
    , 'nablarch'
    , '../WEB-INF/tags'
    , '../include']
  , config = {
      name: 'devtool-loader'
    , baseUrl: '../'
    , out: '../devtool.js'
    , preserveLicenseComments: false
    , optimize: 'none'
    , paths: { requireLib: 'require' }
    , include: [ 'requireLib' ]
    };

libDirs.forEach(include);

process.stdout.write(
	JSON.stringify(config, null, '  ')
);

return;

// ------------------ subroutines --------------------//
function include(dir) {
  var stat = fs.lstatSync(dir);
  if (path.basename(dir).indexOf('.') === 0) {
    return;
  }
  else if (stat.isDirectory()) {
    includeDir(dir); 
  }
  if (stat.isFile()) {
    includeFile(dir);
  }
}

function includeFile(file) {
    var isJS   = (path.extname(file) === '.js')
      , loader = isJS ? '' : 'text!'
      , module = isJS ? file.replace(/\.js$/, '') : file;

    if (isJS && file.indexOf('ui_test') >= 0 || file.match(/.*test\.js$/i)) {
      return; 
    }
    config.include.push(loader + module.replace(/\\/g, '/'));
}

function includeDir(dir) {
  var files = fs.readdirSync(dir)
  files.forEach(function(file) {
    include(path.join(dir, file)); 
  });
}

