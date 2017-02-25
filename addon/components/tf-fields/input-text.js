/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import layout from '../../templates/components/tf-fields/input-text';
import computed from 'ember-computed';
import get from 'ember-metal/get';
const { TextField } = Ember;

/**
  sizeGroup options: 'large', 'small', 'default'

  @public
  @class TfFieldsInputText
  @extends Ember.TextField
 */
export default TextField.extend({
  layout,

  classNames: ['c-tf-fields__input-text', 'c-tf-fields'],
  attributeBindings: ['aria-label', 'aria-describedby', 'role'],
  classNameBindings: ['sizeCategory', 'disabled:c-tf-fields__input-text--disabled'],

  sizeGroup: 'default',

  sizeCategory: computed('sizeGroup', {
    get() {
      const sizeGroup = get(this, 'sizeGroup');
      return `c-tf-fields__input-text--${sizeGroup}`;
    }
  }),

  hook: 'tf-fields__input-text'
});
