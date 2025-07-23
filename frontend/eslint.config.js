import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import testingLibrary from "eslint-plugin-testing-library";
import pluginJestDom from "eslint-plugin-jest-dom";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  // TanStack Query plugin configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@tanstack/query": tanstackQuery,
    },
    extends: tanstackQuery.configs["flat/recommended"],
  },
  // Testing Library plugin configuration
  {
    files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    ...testingLibrary.configs["flat/react"],
  },
  // Jest DOM plugin configuration
  {
    files: ["**/*.{test,spec}.{js,jsx,ts,tsx}"],
    ...pluginJestDom.configs["flat/recommended"],
  },
]);
