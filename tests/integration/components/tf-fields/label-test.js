import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-fields/label', 'Integration | Component | tf fields/label', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{tf-fields/label label="Richard Jefferson"}}`);

  assert.equal(this.$().text().trim(), 'Richard Jefferson', "Renders label");
});

test('positional params', function(assert) {
  this.render(hbs`{{tf-fields/label "Kyrie Irving"}}`);

  assert.equal(this.$().text().trim(), 'Kyrie Irving', "Renders label");
});

test('receives hideLabel', function(assert) {
  this.render(hbs`{{tf-fields/label "Kevin Love" hideLabel=true}}`);

  assert.ok(this.$('label').hasClass('u-hidden-visually'), 'Label is hidden visually');
});

test('receives "for" attribute', function(assert) {
  this.render(hbs`{{tf-fields/label "Russell Westbrook" for="goat"}}`);

  assert.equal(this.$('label').attr('for'), 'goat', 'can pass in "for" attribute');
});
