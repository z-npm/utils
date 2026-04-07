[**@o.z/utils API**](../README.md)

***

# Class: FormElementFactory

Defined in: src/lib/dom/form.ts:89

Factory class to create DOM form elements from a configuration object.

## Example

```ts
const nameInput = FormElementFactory.create({
  type: 'string',
  name: 'username',
  label: 'Username',
  placeholder: 'Enter username'
});

document.body.appendChild(nameInput);
```

## Constructors

### Constructor

> **new FormElementFactory**(): `FormElementFactory`

#### Returns

`FormElementFactory`

## Methods

### create()

> `static` **create**(`config`): `HTMLElement`

Defined in: src/lib/dom/form.ts:99

Creates a DOM form element based on the provided configuration.
Returns a wrapper `div` with the class `form-group` containing
the label (if provided) and the input/select element.

#### Parameters

##### config

[`ElementType`](../type-aliases/ElementType.md)

The configuration object defining the element type and attributes.

#### Returns

`HTMLElement`

A wrapper `HTMLElement` containing the form control.

#### Throws

If the element type in the configuration is not supported.
