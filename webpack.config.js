/**
 * npm start => Target === 'start'
 * npm run build => TARGET === 'build'
 */
var TARGET = process.env.npm_lifecycle_event;

module.exports = require('./webpack/webpack.'+TARGET);
