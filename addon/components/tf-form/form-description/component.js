/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ember-ticketfly-fields/mixins/sizing';
import ValidityMixin from 'ember-ticketfly-fields/mixins/validity';
import layout from './template';
const { Component } = Ember;

/**
  @class FormDescription
  @extends Ember.Component
 */
const InputDescriptionComponent = Component.extend(SizingMixin, ValidityMixin, {
  layout,

  tagName: 'p',
  classNameBindings: ['sizing', 'validity', 'blockElementName']
});

InputDescriptionComponent.reopenClass({
  positionalParams: ['text']
});

export default InputDescriptionComponent;
