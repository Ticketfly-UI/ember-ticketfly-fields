import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { $hook, initialize } from 'ember-hook';

moduleForComponent('tf-input-text', 'Integration | Component | tf input text', {
  integration: true,
  beforeEach() {
    initialize();
  }
});

// Use this.$ instead of $hook for testing tf-input-text__input because of bug 
// involving inconsistently failing tests using ember-hook with Ember.TextField

test('renders inline', function(assert) {
  this.render(hbs`{{tf-input-text value="Paul George"}}`);

  const $input = this.$('.c-tf-fields__input-text');

  assert.ok($input.length, "Input renders");
  assert.equal($input.val(), "Paul George", "Input value is passed into component");
  assert.notOk($hook('tf-fields__label-text').length, "Label does not render if not passed in");
});

test('receives a label inline', function(assert) {
  this.render(hbs`{{tf-input-text label="Stud"}}`);

  const $label = $hook('tf-fields__label-text');

  assert.ok($label.length, "Label renders");
  assert.equal($label.text().trim(), "Stud", "Label comes from label param");
});

test('receives hideLabel', function(assert) {
  this.render(hbs`{{tf-input-text label="Giannis" hideLabel=true}}`);

  const $label = $hook('tf-fields__label-text');

  assert.ok($label.length, "Label still renders");
  assert.ok($label.hasClass('u-hidden-visually'), "Label is hidden visually");
});

test('receives inputId', function(assert) {
  this.render(hbs`{{tf-input-text label="Channing" inputId="haha-id"}}`);

  const $input = this.$('.c-tf-fields__input-text');
  const $label = $hook('tf-fields__label-text');

  assert.equal($input.attr('id'), "haha-id", "inputId is passed into input component");
  assert.equal($input.attr('id'), $label.attr('for'), 'label "for" matches input "id"');
});

test('default inputId', function(assert) {
  this.render(hbs`{{tf-input-text label="Dwade"}}`);

  const $input = this.$('.c-tf-fields__input-text');
  const $label = $hook('tf-fields__label-text');

  assert.equal($input.attr('id'), $label.attr('for'), 'label "for" matches input "id" by default'); 
});

test('receives aria-label, aria-describedby, role', function(assert) {
  this.render(hbs`{{tf-input-text ariaLabel="Gucci" ariaDescribedby="Louis" role="Fendi"}}`);

  const $input = this.$('.c-tf-fields__input-text');

  assert.equal($input.attr('aria-label'), "Gucci", "Passes aria-label attribute to input");
  assert.equal($input.attr('aria-describedby'), "Louis", "Passes aria-describedby attribute to input");
  assert.equal($input.attr('role'), "Fendi", "Passes role attribute to input");
});

test('receives sizeGroup', function(assert) {
  this.render(hbs`{{tf-input-text sizeGroup="small"}}`);

  const $input = this.$('.c-tf-fields__input-text');

  assert.ok($input.hasClass('c-tf-fields__input-text--small'), "sizeGroup is passed to input");
});

test('renders in block form', function(assert) {
  this.render(hbs`
    {{#tf-input-text as |group|}}
      {{group.label "Labely label"}}
      {{group.input value="Calpico"}}
    {{/tf-input-text}}
  `);

  const $input = this.$('.c-tf-fields__input-text');
  const $label = $hook('tf-fields__label-text');

  assert.ok($input.length, "Input renders");
  assert.equal($input.val(), "Calpico", "Input value is passed into component");
  assert.ok($label.length, "Label renders");
  assert.equal($label.text().trim(), "Labely label", "Label text renders");
});


