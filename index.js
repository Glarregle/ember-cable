'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);
    this.importDependencies();
  },

  importDependencies() {
    this.import('node_modules/@rails/actioncable/app/assets/javascripts/action_cable.js');
    this.import('vendor/actioncable-shim.js');
  }
};
