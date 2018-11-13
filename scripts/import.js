var fs = require('fs');
var capitalize = require('capitalize');
const replace = require('replace-in-file');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];

var block_types = [
  'call-to-action',
  'contacts',
  'contents',
  'features',
  'footers',
  'forms',
  'headers',
  'pricings',
  'teams',
  'testimonials'
]

function createVueFile (path, item, block_type) {
  let name = item.split('.html')[0]
  let newName = capitalize.words(name.split('-').join(' ')).split(' ').join('')

  let newPath = `src/components/${block_type}/${newName}.vue`

  fs.readFile(`${path}/${item}`, 'utf8', function(err, contents) {
    fs.writeFile(newPath, `<template>
${contents}
</template>
`, function (err) {
    replace.sync({
      files: newPath,
      from: /\.\/imgs\//g,
      to: '/imgs/'
    });
  })
})
}

function copyFile(itemPath, newPath) {
  var ws = fs.createReadStream(itemPath);
  ws.pipe(fs.createWriteStream(newPath));
  ws.on('close', function () {

  })
}

function readContents(path, block_type) {
  fs.readdir(path, function(err, items) {
      for (var i = 0; i < items.length; i++) {
        createVueFile(path, items[i], block_type)
      }
  });
}

for (var i = 0; i < block_types.length; i++) {
  readContents(`${path}/src/html/${block_types[i]}`, block_types[i])
}