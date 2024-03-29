const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
      }
    }
  ],
  '@babel/preset-react'
]

const plugins = [
  ['react-hot-loader/babel'],
  ['@babel/plugin-proposal-class-properties'],
]

module.exports = { presets, plugins }