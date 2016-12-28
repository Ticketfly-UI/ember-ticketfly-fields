/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
import SizingMixin from 'ember-ticketfly-fields/mixins/sizing';
import ValidityMixin from 'ember-ticketfly-fields/mixins/validity';
const { TextArea } = Ember;

/**
  @public
  @class TfTextarea
  @extends Ember.TextArea
 */
export default TextArea.extend(SizingMixin, ValidityMixin, {
  classNames: ['tf-textarea']
});
