module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  rules: {
    'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
    'jsx-a11y/anchor-is-valid': [ 'error', { components: [ 'Link' ], specialLink: [ 'to' ] } ],
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'jsx-a11y/label-has-for': 'off'
  },
  plugins: [ 'mocha' ]
};
