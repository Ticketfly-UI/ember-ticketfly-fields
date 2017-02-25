import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-fields/input-text', 'Integration | Component | tf fields/input text', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tf-fields/input-text}}`);

  assert.equal(this.$().text().trim(), '');
});

test('receives aria-label', function(assert) {
  this.render(hbs`{{tf-fields/input-text aria-label="Labely aria"}}`);

  assert.equal(this.$('input').attr('aria-label'), "Labely aria", "aria-label is a passed in attribute");
});

test('receives aria-describedby', function(assert) {
  this.render(hbs`{{tf-fields/input-text aria-describedby="Describy aria"}}`);

  assert.equal(this.$('input').attr('aria-describedby'), "Describy aria", "aria-describedby is a passed in attribute");
});

test('receives role', function(assert) {
  this.render(hbs`{{tf-fields/input-text role="Role aria"}}`);

  assert.equal(this.$('input').attr('role'), "Role aria", "role is a passed in attribute");
});

test('receives sizeGroup', function(assert) {
  this.render(hbs`{{tf-fields/input-text sizeGroup="large"}}`);

  assert.ok(this.$('input').hasClass('c-tf-fields__input-text--large'), "sizeGroup is passed in to the input's class");
});
