import yaml from 'yaml';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from "node:url";

export async function resolve(specifier, context, nextResolve) {
  var re = new RegExp(".yml$");

  if (re.test(specifier)) {
    return nextResolve(specifier);
  }

  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {

  if (url.endsWith('.yml') || url.endsWith('.yaml')) {
    const content = await fs.readFile(fileURLToPath(url), 'utf8')
    const source = JSON.stringify(yaml.parse(content))

    return { format: 'json', source, shortCircuit: true }
  } 

  const result = await nextLoad(url, context);

  if (result.format === 'commonjs') {
    result.source ??= await readFile(new URL(result.responseURL ?? url));
  }

  return result;
} 
