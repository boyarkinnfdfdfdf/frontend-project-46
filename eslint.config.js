import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest"; 

export default [
  {
    files: ["/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",  
      },
    },
    plugins: {
      react: pluginReact,
      jest: pluginJest,
    },
    rules: {
      
    },
    extends: [
      pluginJs.configs.recommended,
      pluginReact.configs.flat.recommended,
      "plugin:jest/recommended" 
    ],
  },
];
