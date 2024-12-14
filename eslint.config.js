import infra from "./build/eslint-plugin-infra/index.js";
import { BUILD_VARIABLES } from './build/const/webpack.js';

export default [
  {
    plugins: { infra },
    rules: {
      "infra/strict-const": []
    }
  }
];
