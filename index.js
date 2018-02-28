'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var defaults = require('lodash.defaults');
var path = require('path');

module.exports = {
  name: 'later',

  included: function (app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    this.laterOptions = this.getConfig();

    var vendor = this.treePaths.vendor;

    app.import(vendor + '/later/later.min.js', { prepend: true });
  },

  treeForVendor: function (vendorTree) {
    var trees = [];
    var options = this.laterOptions;

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(options.laterPath, {
      destDir: 'later',
      include: [new RegExp(/\.js$/)],
      exclude: ['test', 'benchmark', 'example', 'src'].map(function (key) {
        return new RegExp(key + '\.js$');
      }),
    }));

    return mergeTrees(trees);
  },

  getConfig: function () {
    var projectConfig = ((this.project.config(process.env.EMBER_ENV) || {}).later || {});
    var laterPath = path.dirname(require.resolve('later'));

    var config = defaults(projectConfig, {
      laterPath: laterPath,
    });

    return config;
  },
};
