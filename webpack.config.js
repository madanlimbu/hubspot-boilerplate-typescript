
const THEME_NAME = 'hubspot-boilerplate-typescript';
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin')
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

const serverlessFunctionConfig = ({ account, autoupload }) => ({
    target: 'node',
    entry: {
        test: './src/app.functions/test.ts'
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            include: [
                path.resolve(__dirname, 'src/app.functions'),
            ],
            loader: 'babel-loader',
        }, ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.functions/[name].js",
        library: {
            type: 'umd'
        }
    },
    plugins: [
        new HubSpotAutoUploadPlugin({
            account,
            autoupload,
            src: 'dist',
            dest: THEME_NAME,
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/app.functions/serverless.json", to: "app.functions/serverless.json" },
                { from: "src/theme.json", to: "" },
                { from: "src/fields.json", to: "" },
            ]
        }),
    ],
});

module.exports = [serverlessFunctionConfig];