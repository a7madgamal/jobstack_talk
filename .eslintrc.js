module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:react/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "no-type-assertion",
    "eslint-comments",
  ],
  rules: {
    "no-undef": "off",
  },
  overrides: [
    {
      files: ["talk/**/*.ts", "talk/**/*.tsx"],
      rules: {
        // "@typescript-eslint/no-explicit-any": "error",

        // "@typescript-eslint/ban-types": [
        //   "warn",
        //   {
        //     types: {
        //       unknown: "Use a better type please",
        //       Function: {
        //         message: "Function is too generic. Use ()=> instead",
        //         // fixWith: "() => void",
        //       },
        //     },
        //   },
        // ],

        // "no-type-assertion/no-type-assertion": "warn",

        // "@typescript-eslint/ban-ts-comment": [
        //   "error",
        //   {
        //     "ts-expect-error": "allow-with-description",
        //     "ts-ignore": "allow-with-description",
        //     "ts-nocheck": true,
        //     "ts-check": true,
        //     minimumDescriptionLength: 5,
        //   },
        // ],

        "eslint-comments/no-unused-disable": "error",
        "eslint-comments/no-use": ["warn"],
        "eslint-comments/require-description": "error",
        "no-unused-vars": "off",
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          legacyDecorators: true,
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
      },
    },
    {
      files: ["talk/globalTypes.d.ts"],
      rules: {
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
