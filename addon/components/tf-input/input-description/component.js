/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ember-ticketfly-fields/mixins/sizing-mixin';
import ValidityMixin from 'ember-ticketfly-fields/mixins/validity-mixin';
import layout from './template';
const { Component } = Ember;

/**
  @class TfInputDescription
  @extends Ember.Computed
 */
const InputDescriptionComponent = Component.extend(SizingMixin, ValidityMixin, {
  layout,

  tagName: 'p',
  classNameBindings: ['sizing', 'validity'],

  utilityName: 'description'
});

InputDescriptionComponent.reopenClass({
  positionalParams: ['text']
});

export default InputDescriptionComponent;
