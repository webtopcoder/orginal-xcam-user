const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './style/default.less'), 'utf8'));

const nextConfig = {
  distDir: 'dist/.next',
  poweredByHeader: false
  // target: "serverless"
};

const plugins = [
  withLess({
    // cssModules: true,
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    },
    webpack: (config, { isServer }) => {
      // it is a trick, since we have issue if import less file
      // add tsconfig paths here to avoid that
      // eslint-disable-next-line no-param-reassign
      config.resolve.plugins = [new TsconfigPathsPlugin()];

      if (isServer) {
        const antStyles = /antd\/.*?\/style.*?/;
        const origExternals = [...config.externals];
        // eslint-disable-next-line no-param-reassign
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback();
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback);
            } else {
              callback();
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        ];

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader'
        });
      }
      return config;
    }
  }),
  withCSS

  // (nextConfig = {}) => {
  //   return Object.assign({}, nextConfig, {
  //     webpack(config, options) {
  //       config.resolve.plugins = [new TsconfigPathsPlugin()];
  //       // if (config.resolve.plugins) {
  //       //   config.resolve.plugins(new TsconfigPathsPlugin());
  //       // } else {
  //       //   config.resolve.plugins = [new TsconfigPathsPlugin()];
  //       // }

  //       return config;
  //     }
  //   })
  // }
];
module.exports = withPlugins(plugins, nextConfig);
