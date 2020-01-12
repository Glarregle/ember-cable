(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['ActionCable']
    };
  }

  define('@rails/actioncable', [], ActionCable);
})();
