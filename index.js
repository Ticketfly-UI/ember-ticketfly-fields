/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ticketfly-fields',

  included: function(app) {

    app.import('app/styles/ember-ticketfly-fields.css');

    this._super.included.call(this, app);

  }
};
