const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNormalize = require('postcss-normalize');

module.exports = () => {
    return {
        output: {
            filename: '[name].[contentHash].js',
        },
        devtool: 'source-map',
        optimization: {
            minimizer: [
                new OptimizeCssAssetsPlugin(),
                new TerserPlugin(),
                new HtmlWebpackPlugin({
                    template: './public/index.html',
                    minify: {
                        removeAttributeQuotes: true,
                        collapseWhitespace: true,
                        removeComments: true,
                    },
                }),
            ],
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    ident: 'postcss',
                                    plugins: [autoprefixer, postcssNormalize()],
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    ident: 'postcss',
                                    plugins: [autoprefixer, postcssNormalize()],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].[contentHash].css',
            }),
        ],
    };
};
