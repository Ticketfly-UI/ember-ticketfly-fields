/**
  @module ember-ticketfly-fields
 */
import Component from 'ember-component';
import layout from '../../templates/components/tf-fields/label';

/**
  @public
  @class TfFieldsLabel
  @extends Ember.Component
 */
const TfFieldsLabelComponent = Component.extend({
  layout,

  tagName: 'label',

  classNames: ['c-tf-fields__label', 'c-tf-fields'],
  classNameBindings: ['hideLabel:u-hidden-visually'],

  attributeBindings: ['for'],

  hook: 'tf-fields__label'
});

TfFieldsLabelComponent.reopenClass({
  positionalParams: ['label']
});

export default TfFieldsLabelComponent;
