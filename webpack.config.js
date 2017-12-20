const { ContextReplacementPlugin } = require('webpack');

module.exports = {
  entry: [
    './src/styles.css',
    './src/main.ts'
  ],
  output: {
    path: `${__dirname}/public`,
    filename: 'assets/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new ContextReplacementPlugin(/angular(\\|\/)core/, __dirname)
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader']
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    open: true,
    port: 9001,
    proxy: {
      '/rpc': 'http://localhost:9000'
    }
  }
};
