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
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
       test: /\.(gif|png|jpg)$/,
       use: [
         {
           loader: 'url-loader',
           // 以下option部分がfile-loaderの読み込み(設定)
           options: {
           limit: 51200,// ＝51200B＝50KB
           name: './img/[name].[ext]'
           }
         }
       ]
      }
    ]
  },
}
