import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';

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

test('logs warning for invalid sizeGroup', function(assert) {
  const spy = sinon.spy(console, 'log');
  const sizeGroup = "invalid-size";

  this.set('sizeGroup', sizeGroup);

  this.render(hbs`{{tf-fields/input-text sizeGroup=sizeGroup}}`);

  const id = this.$('input').attr('id');
  const expectedLogMsg = `input-text component #${id}: '${sizeGroup}' is not a valid sizeGroup. Only 'small', 'medium', 'large' are supported.`;

  assert.ok(spy.calledOnce, "Console logs if invalid sizeGroup");
  assert.equal(spy.args[0], expectedLogMsg, "Console logs available options and component id");

  console.log.restore();
});
