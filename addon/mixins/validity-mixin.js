/**
 * @module ember-ticketfly-fields
 */
import Ember from 'ember';
const { Mixin, computed, get } = Ember;

/**
  @class ValidityMixin
  @extends Ember.Mixin
 */
export default Mixin.create({
  shouldValidate: false,
  isValid: false,

  validity: computed('shouldValidate','isValid', {
    get() {
      if (get(this, 'shouldValidate')) {
        return get(this, 'isValid') ? 'is-valid' : 'is-invalid';
      }
    }
  })
});
