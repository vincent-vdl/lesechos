// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// 
// 
// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import pluginReactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      "react/function-component-definition": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react/jsx-key": [1],
      "react/jsx-fragments": [1, "element"],
      "react/jsx-sort-props": [
        1,
        {
          callbacksLast: true,
          shorthandFirst: true,
          reservedFirst: ["key"],
          multiline: "last",
        },
      ],
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".ts", ".tsx"],
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/array-type": ["error", { "default": "generic" }],
      "no-console": "warn",
      "no-debugger": "warn",
      "no-irregular-whitespace": "error",
      "no-mixed-operators": "off",
      "no-mixed-spaces-and-tabs": "error",
      "no-nested-ternary": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          "args": "none",
          "ignoreRestSiblings": true,
          "vars": "all"
        }
      ]
    },
  },
];

