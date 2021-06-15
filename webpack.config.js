const THEME_NAME = 'hubspot-boilerplate-typescript';
const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin')
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");
// const glob = require("glob");

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
//
// const feEntries = glob.sync('./src/components/**/*.ts').reduce((acc, item) => {
//     const path = item.split('/');
//     const name = path.join('/').replace('./src/', '').replace('.ts', '');
//     acc[name] = item;
//     return acc;
// }, {});

const themeConfig = ({ account, autoupload }) => ({
    entry:  {
        test: './src/index.ts'
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'babel-loader',
        }]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
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
                // { from: "src/modules", to: "modules" },
                // { from: "src/templates", to: "templates" },
                { from: "src/components", to: "components" },
                { from: "src/theme.json", to: "" },
                { from: "src/fields.json", to: "" },
            ]
        }),
    ],
});

module.exports = [serverlessFunctionConfig, themeConfig];