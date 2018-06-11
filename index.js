/**
 * User: shipengqi (pooky.shipengqi@gmail.com)
 * Date: 2018/6/5
 * Time: 21:00
 *
 */

module.exports = {
  extends: 'standard',
  rules: {
    'arrow-parens': [2, 'as-needed'],
    eqeqeq: 2,
    'eol-last': 0,
    quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
    'no-return-assign': 0,
    'no-var': 2,
    semi: [2, 'always'],
    'space-before-blocks': 2,
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    yoda: 0,
    'arrow-spacing': 2,
    'dot-location': [2, 'property'],
    'prefer-arrow-callback': 2,
    'space-unary-ops':
      ['error', {
        'words': true,
        'nonwords': true,
        'overrides': {
          '!': false
        }
      }],
    'no-useless-call': 0,
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'ignore'
    }],
    'new-cap': ['error', { 'newIsCap': false }]
  }
};