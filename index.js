/* jshint node: true */
'use strict';

// var BabelTranspiler = require('broccoli-babel-transpiler');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

  module.exports = {
    name: 'ember-cli-ally',

    /**
     * The addon tree is augmented with the impagination modules. This
     * makes them available not only to `ember-impagination` as a whole,
     * but also to the application if they want to embed it. It'll look
     * like:
     *    ember-impagination/components/impagination-dataset.js
     *    ember-impagination/templates/components/impagination-dataset.js
     *    impagination/dataset.js
     *    impagination/record.js
     *    impagination/page.js
     */
    treeForAddon: function() {
      console.log(arguments);
      // get the base addon tree
      var addonTree = this._super.treeForAddon.apply(this, arguments);


      // transpile the impagination sources into ES5. However, we want
      // to leave the ES6 module declaration in place because they'll be
      // handled later by ember-cli.
      // var transpiled = new BabelTranspiler('bower_components/ally.js/src', {
      //   loose: true,
      //   blacklist: ['es6.modules']
      // });


      // take the transpiled impagination sources and put them into
      // `modules/impagination/{dataset|record|page}.js` so that the
      // ember-cli build will pick them up.
      var ally = new Funnel('bower_components/ally.js/src', {
        destDir: 'modules/ally'
      });
      var platform = new Funnel('bower_components/platform.js', {
        files: ['platform.js'],
        destDir: 'modules'
      });
      var findIndex = new Funnel('bower_components/Array.prototype.findIndex', {
        files: ['array.prototype.findindex.js'],
        destDir: 'modules'
      });
      var cssEscape = new Funnel('bower_components/CSS.escape', {
        files: ['css.escape.js'],
        destDir: 'modules'
      });

      return new MergeTrees([addonTree, ally, platform, findIndex, cssEscape]);
    }
};

// included: function(app) {
//   this._super.included(app);
//   this.app.import(app.bowerDirectory + '/ally/src/ally');
//   this.app.import('vendor/shims/ally.js');
// }
