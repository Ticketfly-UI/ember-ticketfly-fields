/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ember-ticketfly-fields/mixins/sizing-mixin';
import ValidityMixin from 'ember-ticketfly-fields/mixins/validity-mixin';
const { TextField } = Ember;

/**
  @public
  @class TfInput
  @extends Ember.TextField
 */
export default TextField.extend(SizingMixin, ValidityMixin, {
  classNames: ['c-input'],
  classNameBindings: ['sizing', 'validity'],
  attributeBindings: ['aria-describedby']
});
