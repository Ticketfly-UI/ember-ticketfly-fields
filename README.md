# Ticketfly Fields

This Ember addon provides the field components of the Ticketfly UI library. The components provided include:

* `tf-input`
* `tf-input-group`
* `tf-textarea`

## Usage

**Input Sizing**

Template:
```hbs
{{tf-input size="large"}}
{{tf-input}} {{!-- size="default" by default --}}
{{tf-input size="small"}}
```

Resulting HTML:
```html
<input type="text" class="c-input u-input-large">
<input type="text" class="c-input">
<input type="text" class="c-input u-input-small">
```

**Input Block with Label & Description**

Template:

```hbs
{{#tf-input-group size="large" as |group|}}
  {{group.label "First Name"}}
  {{group.input}}
  {{group.description "You must provide a First Name"}}
{{/tf-input-group}}
```

Resulting HTML:

```html
<div class="c-input-group">
  <label class="u-label-large" for="random-uuid">First Name</label>
  <input class="c-input u-input-large" type="text" id="random-uuid" aria-describedby="other-uuid">
  <p class="u-description-large" id="other-uuid">You must provide a First Name</p>
</div>
```

The contextual components for `tf-input-group` support overriding the size of child components such as:

```hbs
{{#tf-input-group size="large" as |group|}}
  {{group.label "First Name" }} <!--large, following group size-->
  {{group.input }}  <!--large, following group size-->
  {{group.description "You must provide a First Name" size="small"}} <!--small, overriding group size-->
{{/tf-input-group}}
```

**Input Validation States**

Template:

```hbs
{{tf-input should-validate=true is-valid=true}}
{{tf-input should-validate=true is-valid=false}}
{{tf-input should-validate=false is-valid=true}}

{{#tf-input-group should-validate=true is-valid=false as |group|}}
  {{group.label "First Name"}}
  {{group.input}}
  {{group.description "You must provide a First Name"}}
{{/tf-input-group}}
```

Resulting HTML:

```html
<input type="text" class="c-input is-valid">
<input type="text" class="c-input is-invalid">
<input type="text" class="c-input">

<div class="c-input-group">
  <label class="is-invalid" for="random-uuid">First Name</label>
  <input class="c-input is-invalid" type="text" id="random-uuid" aria-describedby="other-uuid">
  <p class="is-invalid" id="other-uuid">You must provide a First Name</p>
</div>
```

**Text Area**

Template:

```hbs
{{tf-textarea}}
```

Resulting HTML:

```html
<textarea class="c-textarea"></textarea>
```

## Installation

* `git clone <repository-url>` this repository
* `cd ticketfly-fields`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
