/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import layout from '../../templates/components/tf-fields/input-text';
import computed from 'ember-computed';
import get from 'ember-metal/get';
const { TextField } = Ember;

const SIZE_GROUPS = ['small', 'medium', 'large'];

/**
  @public
  @class TfFieldsInputText
  @extends Ember.TextField
 */
export default TextField.extend({
  layout,

  classNames: ['c-tf-fields__input-text'],
  attributeBindings: ['aria-label', 'aria-describedby', 'role'],
  classNameBindings: ['sizeCategory', 'disabled:c-tf-fields__input-text--disabled'],

  sizeGroup: 'medium',

  didInsertElement() {
    this._super(...arguments);
    
    const sizeGroup = get(this, 'sizeGroup');
    const id = this.$().attr('id');

    if(SIZE_GROUPS.indexOf(sizeGroup) === -1) {
      console.log(`input-text component #${id}: '${sizeGroup}' is not a valid sizeGroup. Only 'small', 'medium', 'large' are supported.`);
    }
  },

  sizeCategory: computed('sizeGroup', {
    get() {
      const sizeGroup = get(this, 'sizeGroup');
      return `c-tf-fields__input-text--${sizeGroup}`;
    }
  }),

  hook: 'tf-fields__input-text'
});
