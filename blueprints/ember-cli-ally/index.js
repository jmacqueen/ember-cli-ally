/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {},

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(/*options*/) {
    return this.addBowerPackageToProject('ally', 'https://github.com/medialize/ally.js/releases/download/1.0.1/ally.js.zip');
  }
};
