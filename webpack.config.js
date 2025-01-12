import path from 'node:path';

import { BUILD_VARIABLES } from './build/const/webpack.js';
import webpack from 'webpack';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist')
  },
  devtool: false,
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin(BUILD_VARIABLES)
  ]
}
