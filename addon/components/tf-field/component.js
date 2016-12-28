/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import layout from './template';
const { Component, guidFor, computed } = Ember;

/**
  @public
  @class TfField
  @extends Ember.Component
 */
export default Component.extend({
  layout,
  
  tagName: 'div',
  classNames: ['tf-field'],

  inputGuid: computed({
    get() {
      return `id-${guidFor(this)}`;
    }
  }),

  describedByGuid: computed({
    get() {
      return `described-by-${guidFor(this)}`;
    }
  })
});
