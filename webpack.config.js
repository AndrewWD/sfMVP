const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'dev'

const config = {
  mode: isDev ? 'development' : 'production',
  entry: {
    app: path.join(__dirname, './index.js')
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.join(__dirname, './dist'),
    // publicPath: '/assets/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, './node_modules'),
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                }),
              ]
            }
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './template.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
  ]
}

if (isDev) {
  config.devtool = '#@cheap-module-eval-source-map'
  config.devServer = {
    host: '127.0.0.1',
    port: '8888',
    hot: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    // publicPath: '/assets/',
    historyApiFallback: {
      index: '/assets/index.html',
    },
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
} else {
  config.plugins.push(new CleanWebpackPlugin())
}

module.exports = config