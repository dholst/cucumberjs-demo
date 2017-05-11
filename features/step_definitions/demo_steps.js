let {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given}) {
  Given(/^xxx$/, function() {
    console.log("cucumber-2.0.x is awesome");
  });
});
