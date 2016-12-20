import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-input', 'Integration | Component | tf-input', {
  integration: true
});

test('renders tf-input', function(assert) {
  this.render(hbs`
    {{tf-input}}
  `);
  assert.ok(this.$('input').length, 'Input is rendered');
});

test('binds sizeStyle attribute to input sizing', function(assert) {
  this.render(hbs`
    {{tf-input sizeStyle=sizeStyle}}
  `);
  assert.ok(!this.$('input').hasClass('u-input-large') || !this.$('input').hasClass('u-input-small'), 
    'No input sizing specified by default');
  this.set('sizeStyle', 'large');
  assert.ok(this.$('input').hasClass('u-input-large'), 'Input sizeStyle is large');
});

test('validation states', function(assert) {
  this.set('shouldValidate', false);
  this.set('isValid', true);
  this.render(hbs`
    {{tf-input shouldValidate=shouldValidate isValid=isValid}}
  `);
  assert.ok(!this.$('input').hasClass('is-valid') || !this.$('input').hasClass('is-invalid'),
    'No class for validity when shouldValidate is false');
  this.set('shouldValidate', true);
  assert.ok(this.$('input').hasClass('is-valid'), 'Input is valid');
  this.set('isValid', false);
  assert.ok(this.$('input').hasClass('is-invalid'), 'Input is invalid');
});
