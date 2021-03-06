const env = process.env.NODE_ENV || 'dev';

if (env === 'dev') {
  const config = require('./config.json');

  Object.keys(config).forEach((key) => {
    process.env[key] = config[key];
  });
}
