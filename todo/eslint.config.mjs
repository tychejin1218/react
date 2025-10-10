import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser, // JSX 해석 가능 파서
      parserOptions: {
        requireConfigFile: false, // Babel 설정 파일 불필요
        babelOptions: {
          presets: ['@babel/preset-react'], // JSX 문법 지원
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      prettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+에서는 JSX에서 React import 불필요
      'no-unused-vars': 'off',           // React import 미사용 경고 끄기
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
