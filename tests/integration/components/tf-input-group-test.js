import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-input-group', 'Integration | Component | tf-input-group', {
  integration: true
});

test('renders tf-input-group', function(assert) {
  this.render(hbs`
    {{#tf-input-group sizeStyle="large" as |group|}}
      {{group.label "First Name"}}
      {{group.input}}
      {{group.description "You must provide a First Name"}}
    {{/tf-input-group}}
  `);
  assert.equal(this.$('label').text(), 'First Name', "Label prints First Name");
  assert.equal(this.$('label').attr('for'), this.$('input').attr('id'), 
    "The label 'for' matches the input 'id'");
  assert.ok(this.$('input').hasClass('u-input-large'), "Input is large");
  assert.equal(this.$('p').text(), 'You must provide a First Name', "Description text shows");
  assert.equal(this.$('input').attr('aria-describedby'), this.$('p').attr('id'), 
    "The input aria-describedby matches the <p> id");
});

test('validates input group', function(assert) {
  this.set('shouldValidate', false);
  this.set('isValid', true);
  this.render(hbs`
    {{#tf-input-group shouldValidate=shouldValidate isValid=isValid as |group|}}
      {{group.label "First Name"}}
      {{group.input}}
      {{group.description "You must provide a First Name"}}
    {{/tf-input-group}}
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

