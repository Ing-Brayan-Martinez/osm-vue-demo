import jsdoc from "eslint-plugin-jsdoc";
import vue from "eslint-plugin-vue";
import parser from "vue-eslint-parser";
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: [
    "tests/**/*.test.ts",
    "**/dist/**/*",
    "**/dist-ssr/**/*",
    "**/coverage/**/*",
  ],
}, ...compat.extends("eslint:recommended", "plugin:vue/vue3-recommended").map(config => ({
  ...config,
  files: ["**/*.{js,mjs,jsx,vue}"],
})), {
  files: ["**/*.{js,mjs,jsx,vue}"],

  plugins: {
    jsdoc,
    vue,
  },

  languageOptions: {
    parser: parser,
  },

  rules: {
    "jsdoc/require-description": "warn",
  },
}];
