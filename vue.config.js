// IMPORTS
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

// CONFIG
const config = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  }
});

// EXPORTS
module.exports = config;
