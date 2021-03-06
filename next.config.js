const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
});
