/* eslint-disable */

const path = require('path')

const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

module.exports = {
  entry: path.resolve(DIR_SRC, 'index.tsx'),

  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /.(jsx|js)$/,
        include: DIR_SRC,
        exclude: DIR_NODE_MODULES,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.tsx?$/,
        include: DIR_SRC,
        exclude: DIR_NODE_MODULES,
        use: [
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },      {
        test: /\.(_redirects)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
