var currencies = require('../dist/data/currencies.js');
module.exports = {
  stripe: Object.keys(currencies),
  paypal: Object.keys(currencies).filter(function(i) {
    return currencies[i].disabled !== 'paypal';
  })
};
