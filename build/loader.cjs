const yaml = require('yaml');
const fs = require('node:fs');

require.extensions['.yml'] = (module, filename) => {
  try {
    const content = fs.readFileSync(filename, 'utf8');
    module.exports = yaml.parse(content);
  } catch (e) {
    console.error(`Failed to load ${filename}:\n`, e);
  }
}