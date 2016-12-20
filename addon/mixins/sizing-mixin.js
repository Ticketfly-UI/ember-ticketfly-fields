/**
 * @module ember-ticketfly-fields
 */
import Ember from 'ember';
const { Mixin, computed, get } = Ember;

/**
  @class SizingMixin
  @extends Ember.Mixin
 */
export default Mixin.create({
  sizing: computed('sizeStyle','utilityName', {
    get() {
      const sizeStyle = get(this, 'sizeStyle');
      if (sizeStyle) {
        const utilityName = get(this, 'utilityName');
        return `u-${utilityName}-${sizeStyle}`;
      }
    }
  }),

  /**
    Override the utilityName property for a more unique sizing class name. 
    Defaults to the class' tagName

    Example

    If the tagName of the component is 'p', one can set the utilityName to change
    the return value of sizing:

    ```javascript
    get(this, 'sizing');                        // 'u-p-large'
    set(this, 'utilityName', 'description');
    get(this, 'sizing');                        // 'u-description-large'  
    ```
   */
  utilityName: computed.oneWay('tagName')
});
