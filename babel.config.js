// https://babeljs.io/docs/en/config-files#babelrc

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@vue/babel-preset-jsx'
  ],
  plugins: [
    ["@babel/plugin-transform-modules-commonjs", {
      "allowTopLevelThis": true,
      "spec": true
    }],
    ["@babel/plugin-transform-dynamic-import", {
      "spec": true
    }],
    ["@babel/plugin-transform-strict-mode", {
      "spec": true
    }],
  ]
};
