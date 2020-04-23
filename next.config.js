const path = require('path');

module.exports = {
    webpack: config => {
      config.resolve.alias['~'] = path.resolve(__dirname);
      config.resolve.alias['@components'] = path.resolve(__dirname,'components');
      config.resolve.alias['@config'] = path.resolve(__dirname,'config');
      return config;
    }
};