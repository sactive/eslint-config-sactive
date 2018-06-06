# eslint-config-sactive

SActive's ESLint config, based on Standard.

![build status](https://travis-ci.org/sactive/eslint-config-sactive.svg?branch=master)


[![NPM](https://nodei.co/npm/eslint-config-sactive.png?downloads=true)](https://nodei.co/npm/eslint-config-sactive/)

## Usage

```bash
npm install --save-dev \
eslint \
eslint-config-sactive \
eslint-config-standard \
eslint-plugin-standard \
eslint-plugin-promise \
slint-plugin-import \
eslint-plugin-node

#or
yarn add eslint \
eslint-config-sactive \
eslint-config-standard \
eslint-plugin-standard \
eslint-plugin-promise \
eslint-plugin-import \
eslint-plugin-node --dev
```

Add this to your `.eslintrc` file:
```javascript
{
  "extends": "sactive"
}
```