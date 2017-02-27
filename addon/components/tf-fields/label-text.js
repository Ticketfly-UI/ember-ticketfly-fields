/**
  @module ember-ticketfly-fields
 */
import Component from 'ember-component';
import layout from '../../templates/components/tf-fields/label-text';

/**
  @public
  @class TfFieldsLabelText
  @extends Ember.Component
 */
const TfFieldsLabelTextComponent = Component.extend({
  layout,

  tagName: 'label',

  classNames: ['c-tf-fields__label-text'],
  classNameBindings: ['hideLabel:u-hidden-visually'],

  attributeBindings: ['for'],

  hook: 'tf-fields__label-text'
});

TfFieldsLabelTextComponent.reopenClass({
  positionalParams: ['label']
});

export default TfFieldsLabelTextComponent;
