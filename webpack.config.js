  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const path = require('path');

  module.exports = {
    entry: './src/index.js', // Entry point of application
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html', // Path to HTML template
      }),
    ],
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true, // Open browser automatically
    },
  };