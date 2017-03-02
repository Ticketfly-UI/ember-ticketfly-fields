import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-fields/label-text', 'Integration | Component | tf fields/label-text', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tf-fields/label-text label="Richard Jefferson"}}`);

  assert.equal(this.$('label').text().trim(), 'Richard Jefferson', "Renders label");
});

test('positional params', function(assert) {
  this.render(hbs`{{tf-fields/label-text "Kyrie Irving"}}`);

  assert.equal(this.$('label').text().trim(), 'Kyrie Irving', "Renders label");
});

test('receives hideLabel', function(assert) {
  this.render(hbs`{{tf-fields/label-text "Kevin Love" hideLabel=true}}`);

  assert.ok(this.$('label').hasClass('u-hidden-visually'), 'Label is hidden visually');
});

test('receives "for" attribute', function(assert) {
  this.render(hbs`{{tf-fields/label-text "Russell Westbrook" for="goat"}}`);

  assert.equal(this.$('label').attr('for'), 'goat', 'can pass in "for" attribute');
});

test('block form', function(assert) {
  this.render(hbs`{{#tf-fields/label-text}}Sup son{{/tf-fields/label-text}}`);

  assert.equal(this.$('label').text().trim(), 'Sup son', "Renders label");
});
