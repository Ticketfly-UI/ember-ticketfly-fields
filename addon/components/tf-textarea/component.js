/**
  @module ember-ticketfly-fields
 */
import Ember from 'ember';
const { TextArea } = Ember;

/**
  @public
  @class TfTextarea
  @extends Ember.TextArea
 */
export default TextArea.extend({
  classNames: ['c-textarea']
});
