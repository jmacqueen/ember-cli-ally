/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-ally',

  included: function(app) {
    this._super.included.apply(this, [app]);
    app.import(app.bowerDirectory + '/ally/ally.min.js');
    app.import('vendor/shims/ally.js');
  }
};
