# Ember Ticketfly Fields

This Ember addon provides the field components of the Ticketfly UI library. The components provided include:

* `tf-input-text`
* `tf-form`
* `tf-textarea`

## Usage

**Input Sizing**

Template:
```hbs
{{tf-input-text sizeStyle="large"}}
{{tf-input-text}} {{!-- sizeStyle="default" by default --}}
{{tf-input-text sizeStyle="small"}}
```

Resulting HTML:
```html
<input type="text" class="tf-input-text tf-input-text--large">
<input type="text" class="tf-input-text">
<input type="text" class="tf-input-text tf-input-text--small">
```

**Form block with Label & Description**

Template:

```hbs
{{#tf-form sizeStyle="large" as |form|}}
  {{form.label "First Name"}}
  {{form.input}}
  {{form.description "You must provide a First Name"}}
{{/tf-form}}
```

Resulting HTML:

```html
<div class="tf-form">
  <label class="tf-form__label--large" for="random-uuid">First Name</label>
  <input class="tf-input-text tf-form__input--large" type="text" id="random-uuid" aria-describedby="other-uuid">
  <p class="tf-form__description--large" id="other-uuid">You must provide a First Name</p>
</div>
```

The contextual components for `tf-form` support overriding the size of child components such as:

```hbs
{{#tf-form sizeStyle="large" as |form|}}
  {{form.label "First Name" }} <!--large, following form size-->
  {{form.input }}  <!--large, following form size-->
  {{form.description "You must provide a First Name" sizeStyle="small"}} <!--small, overriding form size-->
{{/tf-form}}
```

**Input Validation States**

Template:

```hbs
{{tf-input should-validate=true is-valid=true}}
{{tf-input should-validate=true is-valid=false}}
{{tf-input should-validate=false is-valid=true}}

{{#tf-form should-validate=true is-valid=false as |form|}}
  {{form.label "First Name"}}
  {{form.input}}
  {{form.description "You must provide a First Name"}}
{{/tf-form}}
```

Resulting HTML:

```html
<input type="text" class="tf-input-text is-valid">
<input type="text" class="tf-input-text is-invalid">
<input type="text" class="tf-input-text">

<div class="tf-form">
  <label class="is-invalid" for="random-uuid">First Name</label>
  <input class="tf-input-text is-invalid" type="text" id="random-uuid" aria-describedby="other-uuid">
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
<textarea class="tf-textarea"></textarea>
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-ticketfly-fields`
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
