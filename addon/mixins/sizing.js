/**
 * @module ember-ticketfly-fields
 */
import Ember from 'ember';
const { Mixin, computed, get } = Ember;

/**
  The sizing class assumes BEM syntax. Override the blockElementName property to alter the classname.

  Example

  If the tagName of the component is 'p', one can set the blockElementName to change
  the return value of sizing:

  ```javascript
  get(this, 'sizing');                                            // 'tf-p--large'
  set(this, 'blockElementName', 'tf-input-group__description');
  get(this, 'sizing');                                            // 'tf-input-group__description--large'  
  ```

  @class Sizing
  @extends Ember.Mixin
*/
export default Mixin.create({
  blockElementName: computed('tagName', {
    get() {
      return `tf-${get(this, 'tagName')}`;
    }
  }),

  sizing: computed('sizeStyle','blockElementName', {
    get() {
      const sizeStyle = get(this, 'sizeStyle');
      if (sizeStyle) {
        const blockElementName = get(this, 'blockElementName');
        return `${blockElementName}--${sizeStyle}`;
      }
    }
  })
});
