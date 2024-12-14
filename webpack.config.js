import { BUILD_VARIABLES } from './build/const/webpack';
import { DefinePlugin } from 'webpack';

export default {
  entry: './src/index.js',
  output: {
    path: './dist'
  },
  devtool: false,
  mode: 'development',
  plugins: [
    new DefinePlugin(BUILD_VARIABLES)
  ]
}
