import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-input-text', 'Integration | Component | tf-input-text', {
  integration: true
});

test('renders tf-input-text', function(assert) {
  this.render(hbs`
    {{tf-input-text}}
  `);
  assert.ok(this.$('input').length, 'Input is rendered');
});

test('binds sizeStyle attribute to input sizing', function(assert) {
  this.render(hbs`
    {{tf-input-text sizeStyle=sizeStyle}}
  `);
  assert.ok(!this.$('input').hasClass('tf-input-text--large') || !this.$('input').hasClass('tf-input-text--small'), 
    'No input sizing specified by default');
  this.set('sizeStyle', 'large');
  assert.ok(this.$('input').hasClass('tf-input-text--large'), 'Input sizeStyle is large');
});

test('validation states', function(assert) {
  this.set('shouldValidate', false);
  this.set('isValid', true);
  this.render(hbs`
    {{tf-input-text shouldValidate=shouldValidate isValid=isValid}}
  `);
  assert.ok(!this.$('input').hasClass('is-valid') || !this.$('input').hasClass('is-invalid'),
    'No class for validity when shouldValidate is false');
  this.set('shouldValidate', true);
  assert.ok(this.$('input').hasClass('is-valid'), 'Input is valid');
  this.set('isValid', false);
  assert.ok(this.$('input').hasClass('is-invalid'), 'Input is invalid');
});

test('binds disabled attribute to input', function(assert) {
  this.render(hbs`
    {{tf-input-text disabled=disabled}}
  `);
  assert.ok(!this.$('input').attr('disabled'), 'Not disabled by default');
  this.set('disabled', true);
  assert.ok(this.$('input').attr('disabled'), 'Disabled input');
});
