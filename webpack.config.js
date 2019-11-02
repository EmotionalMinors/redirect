const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        entry: "./src/index.js",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
            ]
        },
        devtool: env.NODE_ENV === "production" ? "" : "inline-source-map",
        resolve: {
            extensions: ["*", ".js", ".jsx"]
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
                path: path.resolve(__dirname, "build")
            })
        ],
        devServer: {
            contentBase: "./build",
            hot: true
        }
    };
};
