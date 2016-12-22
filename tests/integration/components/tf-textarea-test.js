import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('tf-textarea', 'Integration | Component | tf-textarea', {
  integration: true
});

test('renders tf-textarea', function(assert) {
  this.render(hbs`
    {{tf-textarea}}
  `);
  assert.ok(this.$('textarea').hasClass('tf-textarea'), 'Textarea is rendered');
});
