const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = '/';

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath,
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-typescript',
            ['@babel/preset-react', { runtime: 'automatic' }], // @see  https://stackoverflow.com/questions/32070303/uncaught-referenceerror-react-is-not-defined
            '@babel/preset-env',
          ],
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },

  devServer: {
    port: 8800,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
};
