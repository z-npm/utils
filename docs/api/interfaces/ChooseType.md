[**@o.z/utils API**](../README.md)

***

# Interface: ChooseType

Defined in: [src/lib/dom/form.ts:47](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L47)

Configuration for a selection dropdown (`<select>`).

## Extends

- `Omit`\<`BaseElement`, `"placeholder"`\>

## Properties

### id?

> `optional` **id?**: `string`

Defined in: [src/lib/dom/form.ts:17](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L17)

Unique identifier for the element (maps to `id` attribute).

#### Inherited from

[`StringType`](StringType.md).[`id`](StringType.md#id)

***

### name?

> `optional` **name?**: `string`

Defined in: [src/lib/dom/form.ts:19](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L19)

Name attribute for form submission.

#### Inherited from

[`StringType`](StringType.md).[`name`](StringType.md#name)

***

### label?

> `optional` **label?**: `string`

Defined in: [src/lib/dom/form.ts:21](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L21)

Label text displayed before the input.

#### Inherited from

[`StringType`](StringType.md).[`label`](StringType.md#label)

***

### disabled?

> `optional` **disabled?**: `boolean`

Defined in: [src/lib/dom/form.ts:23](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L23)

Whether the element is disabled and un-editable.

#### Inherited from

[`StringType`](StringType.md).[`disabled`](StringType.md#disabled)

***

### type

> **type**: `"choose"`

Defined in: [src/lib/dom/form.ts:48](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L48)

***

### value?

> `optional` **value?**: `string` \| `number`

Defined in: [src/lib/dom/form.ts:50](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L50)

Initial selected value.

***

### options

> **options**: `object`[]

Defined in: [src/lib/dom/form.ts:52](https://github.com/z-npm/utils/blob/bf3d7ade0aba0810622fac861b461f1b1a97d592/src/lib/dom/form.ts#L52)

List of options to populate the dropdown.

#### name

> **name**: `string`

Display text for the option.

#### value

> **value**: `string` \| `number`

Value submitted with the form.
