/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ember-ticketfly-fields/mixins/sizing';
import ValidityMixin from 'ember-ticketfly-fields/mixins/validity';
import layout from './template';
const { Component } = Ember;

/**
  @class FieldLabel
  @extends Ember.Component
 */
const InputLabelComponent = Component.extend(SizingMixin, ValidityMixin, {
  layout,

  tagName: 'label',
  classNameBindings: ['sizing', 'validity', 'blockElementName'],
  attributeBindings: ['for']
});

InputLabelComponent.reopenClass({
  positionalParams: ['text']
});

export default InputLabelComponent;
