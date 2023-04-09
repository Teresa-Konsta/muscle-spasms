const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'ua'],
      localePath: path.resolve('./public/locales')
    },
  });