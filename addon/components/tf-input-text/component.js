/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ember-ticketfly-fields/mixins/sizing';
import ValidityMixin from 'ember-ticketfly-fields/mixins/validity';
const { TextField } = Ember;

/**
  @public
  @class TfInputText
  @extends Ember.TextField
 */
export default TextField.extend(SizingMixin, ValidityMixin, {
  classNames: ['tf-input'],
  classNameBindings: ['sizing', 'validity', 'blockElementName'],
  attributeBindings: ['aria-describedby', 'disabled'],
  blockElementName: 'tf-input-text'
});
