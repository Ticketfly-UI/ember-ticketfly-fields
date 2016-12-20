/**
  @module ticketfly-fields
 */
import Ember from 'ember';
import layout from './template';
const { Component, guidFor, computed } = Ember;

/**
  @public
  @class TfInputGroup
  @extends Ember.Component
 */
export default Component.extend({
  layout,
  
  classNames: ['c-input-group'],

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