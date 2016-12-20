/**
  @module ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ticketfly-fields/mixins/sizing-mixin';
import ValidityMixin from 'ticketfly-fields/mixins/validity-mixin';
import layout from './template';
const { Component } = Ember;

/**
  @class TfInputLabel
  @extends Ember.Computed
 */
const InputLabelComponent = Component.extend(SizingMixin, ValidityMixin, {
  layout,

  tagName: 'label',
  classNameBindings: ['sizing', 'validity'],
  attributeBindings: ['for']
});

InputLabelComponent.reopenClass({
  positionalParams: ['text']
});

export default InputLabelComponent;