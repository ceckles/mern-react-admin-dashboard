module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": "error",
      "consistent-return": 2,
      indent: [1, 4],
      "no-else-return": 1,
      semi: [1, "always"],
      "space-unary-ops": 2,
    },
  },
};
