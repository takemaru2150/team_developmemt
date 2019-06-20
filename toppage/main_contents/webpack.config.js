module.exports = {
    // mode: "production",
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: __dirname + "/dist"
    },
    devServer: {
      contentBase: './dist'
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
    }
    