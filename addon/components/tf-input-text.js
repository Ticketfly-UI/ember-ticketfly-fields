/**
  @module ember-ticketfly-fields
 */
import Component from 'ember-component';
import layout from '../templates/components/tf-input-text';
import { notEmpty } from 'ember-computed';
import { guidFor } from 'ember-metal/utils';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

/**
  @public
  @class TfInputText
  @extends Ember.Component
 */
export default Component.extend({
  layout,

  didReceiveAttrs() {
    this._super(...arguments);

    // if no inputId is supplied, generate one so that the label and input 
    // can have one to share for accessibility by default
    if (!get(this, 'inputId')) { 
      set(this, 'inputId', `id-${guidFor(this)}`); 
    }
  },

  classNames: ['c-tf-input-text'],
  
  sizeGroup: 'default',

  hideLabel: false,
  label: '',
  hasLabel: notEmpty('label').readOnly(),

  hook: 'tf-input-text'
});
