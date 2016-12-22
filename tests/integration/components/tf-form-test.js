import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-form', 'Integration | Component | tf-form', {
  integration: true
});

test('renders input in form', function(assert) {
  this.render(hbs`
    {{#tf-form sizeStyle="large" as |form|}}
      {{form.input}}
    {{/tf-form}}
  `);
  assert.ok(this.$('form').hasClass('tf-form'), "Form renders");
  assert.ok(this.$('input').hasClass('tf-form__input--large'), "Input is large");
});

test('renders input-label', function(assert) {
  this.render(hbs`
    {{#tf-form sizeStyle="large" as |form|}}
      {{form.label "First Name"}}
      {{form.input}}
    {{/tf-form}}
  `);
  assert.equal(this.$('label').text(), 'First Name', "Label prints First Name");
  assert.equal(this.$('label').attr('for'), this.$('input').attr('id'), 
    "The label 'for' matches the input 'id'");
  assert.ok(this.$('label').hasClass('tf-form__label--large'), "Label is large");
});

test('renders input-label', function(assert) {
  this.render(hbs`
    {{#tf-form sizeStyle="large" as |form|}}
      {{form.input}}
      {{form.description "You must provide a First Name"}}
    {{/tf-form}}
  `);
  assert.ok(this.$('p').hasClass('tf-form__description--large'), "Description is large");
  assert.equal(this.$('p').text(), 'You must provide a First Name', "Description text shows");
  assert.equal(this.$('input').attr('aria-describedby'), this.$('p').attr('id'), 
    "The input aria-describedby matches the <p> id");
});

test('validates form', function(assert) {
  this.set('shouldValidate', false);
  this.set('isValid', true);
  this.render(hbs`
    {{#tf-form shouldValidate=shouldValidate isValid=isValid as |form|}}
      {{form.label "First Name"}}
      {{form.input}}
      {{form.description "You must provide a First Name"}}
    {{/tf-form}}
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

