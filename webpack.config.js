const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require('./build-utils/loadPresets');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webpackMerge(
        {
            mode,
            entry: './src/index',
            output: {
                filename: '[name].[hash].js',
                path: path.resolve(__dirname, 'dist'),
                publicPath: '/',
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },

            module: {
                rules: [
                    {
                        test: /\.(ts|js)x?$/,
                        exclude: /node_modules/,
                        use: 'babel-loader',
                    },
                    {
                      test: /\.(woff|woff2|eot|ttf|otf)$/,    
                     use: [
                           'file-loader',
                     ],
                  },
                    {
                        test: /\.(jpe?g|png|gif|webp)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 5000,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.svg$/,
                        use: 'svg-inline-loader',
                    },
                ],
            },
            plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
        },
        modeConfig(mode),
        presetConfig({ mode, presets }),
    );
};
