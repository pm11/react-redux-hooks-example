/* eslint-disable */
const webpack = require("webpack")
const autoprefixer = require("autoprefixer")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = (env, argv) => {
  const mode = process.env.NODE_ENV || "development"
  const isProduction = mode === "production"
  return {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.tsx"),
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/",
      filename: isProduction ? "bundle.[chunkhash].js" : "[name].js"
    },
    devtool: isProduction ? false : "source-map",
    resolve: {
      extensions: [
        ".ts",
        ".tsx",
        ".js",
        ".jsx"
      ]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "awesome-typescript-loader"
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 2,
                modules: true,
                localIdentName: "[name]-[local]--[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: "typed-css-modules-loader",
              options: {
                camelCase: true,
                searchDir: "./src",
                outDir: "./typings",
                noEmit: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  autoprefixer({
                    browsers: [">5%", "last 4 versions", "not ie < 11"]
                  })
                ]
              }
            },
            {
              loader: "sass-loader",
              options: {
                data: "@import \"./base\";",
                includePaths: [`${__dirname}/src/styling`]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                url: true,
                localIdentName: "[name]-[local]--[hash:base64:5]"
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|bmp|tiff|woff|woff2|eot|ttf|svg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
                name: isProduction ? "[name]-[hash].[ext]" : "[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development"),
          SYSTEM_ENV: JSON.stringify("development")
        }
      }),
      new HtmlWebpackPlugin({
        title: "Sample",
        template: "templates/index.html"
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.css",
        chunkFilename: "[id].css"
      })
    ]
  }
}
