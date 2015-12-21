/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-ally',

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/ally/ally.min.js');
    this.app.import('vendor/shims/ally.js');
  }
};
