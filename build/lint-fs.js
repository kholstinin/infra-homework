import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.normalize('src/components');

const checkDir = async (component) => {
  let fileName;
  const files = await fs.readdir(path.join(root, component));

  fileName = checkFile(files, `${component}.js`);

  if (fileName) {
    console.log(`Structure of component ${component} is broken! Missing ${fileName}`);
  }
  fileName = checkFile(files, `index.js`);

  if (fileName) {
    console.log( `Structure of component ${component} is broken! Missing ${fileName}`);
  }
}

const checkFile = (files, fileName) => {
  const res = files.find((file) => file == fileName);

  if (!res) {
    return fileName;
  }
}

const dirs = await fs.readdir(root);
const result = await Promise.allSettled(dirs.map(dir => checkDir(dir)));

const errors = result.filter(res => (res.value != null)).map(res => res.value);

if (errors.length > 0) {
  console.dir(errors)
  process.exit(1);
}
process.exit(0);