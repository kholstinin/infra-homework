const yaml = require('yaml');
const fs = require('node:fs');

require.extensions['.yml'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8')
  try {
    module.exports = yaml.parse(content)
  } catch (err) {
    err.message = filename + ': ' + err.message
    throw err
  }
}
