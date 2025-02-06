import express from 'express';
import zlib from 'node:zlib';
import mime from 'mime';
import fs from 'node:fs';

const app = express();

app.get('/:filename', async (req, res) => {
  const { filename } = req.params;
  const data = fs.readFileSync(`./assets/${filename}`);
  res.send(data);
});

app.listen(3001, () => {
  console.log('Server listen on port 3001');
});
