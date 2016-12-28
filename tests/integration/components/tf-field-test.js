import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-field', 'Integration | Component | tf-field', {
  integration: true
});

test('renders input in field', function(assert) {
  this.render(hbs`
    {{#tf-field sizeStyle="large" as |field|}}
      {{field.input}}
    {{/tf-field}}
  `);
  assert.ok(this.$('div').hasClass('tf-field'), "field renders");
  assert.ok(this.$('input').hasClass('tf-field__input--large'), "Input is large");
});

test('renders input-label', function(assert) {
  this.render(hbs`
    {{#tf-field sizeStyle="large" as |field|}}
      {{field.label "First Name"}}
      {{field.input}}
    {{/tf-field}}
  `);
  assert.equal(this.$('label').text(), 'First Name', "Label prints First Name");
  assert.equal(this.$('label').attr('for'), this.$('input').attr('id'), 
    "The label 'for' matches the input 'id'");
  assert.ok(this.$('label').hasClass('tf-field__label--large'), "Label is large");
});

test('renders input-label', function(assert) {
  this.render(hbs`
    {{#tf-field sizeStyle="large" as |field|}}
      {{field.input}}
      {{field.description "You must provide a First Name"}}
    {{/tf-field}}
  `);
  assert.ok(this.$('p').hasClass('tf-field__description--large'), "Description is large");
  assert.equal(this.$('p').text(), 'You must provide a First Name', "Description text shows");
  assert.equal(this.$('input').attr('aria-describedby'), this.$('p').attr('id'), 
    "The input aria-describedby matches the <p> id");
});

test('validates field', function(assert) {
  this.set('shouldValidate', false);
  this.set('isValid', true);
  this.render(hbs`
    {{#tf-field shouldValidate=shouldValidate isValid=isValid as |field|}}
      {{field.label "First Name"}}
      {{field.input}}
      {{field.description "You must provide a First Name"}}
    {{/tf-field}}
  `);
  assert.ok(!this.$('input, label, p').hasClass('is-valid') || !this.$('input, label, p').hasClass('is-invalid'),
    'No class for validity when shouldValidate is false');
  this.set('shouldValidate', true);
  assert.ok(this.$('input').hasClass('is-valid'), 'Input is valid');
  assert.ok(this.$('label').hasClass('is-valid'), 'Label is valid');
  assert.ok(this.$('p').hasClass('is-valid'), '<p> is valid');
  this.set('isValid', false);
  assert.ok(this.$('input').hasClass('is-invalid'), 'Input is invalid');
  assert.ok(this.$('label').hasClass('is-invalid'), 'Label is invalid');
  assert.ok(this.$('p').hasClass('is-invalid'), '<p> is invalid');
});

