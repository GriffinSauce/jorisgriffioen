const withPreact = require('next-plugin-preact');
const optimizedImages = require('next-optimized-images');

module.exports = withPreact(optimizedImages());