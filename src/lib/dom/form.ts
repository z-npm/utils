/**
 * @fileoverview Factory utilities for creating type-safe DOM form elements.
 *
 * Provides a programmatic way to generate standardized form controls (inputs, selects, checkboxes)
 * with consistent structure and attributes based on a configuration object.
 *
 * @module dom/form
 * @category DOM
 */

/**
 * Base configuration for form elements.
 * Shared properties across all element types.
 */
interface BaseElement {
  /** Unique identifier for the element (maps to `id` attribute). */
  id?: string
  /** Name attribute for form submission. */
  name?: string
  /** Label text displayed before the input. */
  label?: string
  /** Whether the element is disabled and un-editable. */
  disabled?: boolean
  /** Placeholder text for input elements. */
  placeholder?: string
}

/** Configuration for a string text input. */
export interface StringType extends BaseElement {
  type: "string"
  /** Initial value of the input. */
  value?: string
}

/** Configuration for a numeric input. */
export interface NumberType extends BaseElement {
  type: "number"
  /** Initial value of the input. */
  value?: number
  /** Minimum allowed value. */
  min?: number
  /** Maximum allowed value. */
  max?: number
}

/** Configuration for a selection dropdown (`<select>`). */
export interface ChooseType extends Omit<BaseElement, "placeholder"> {
  type: "choose"
  /** Initial selected value. */
  value?: string | number
  /** List of options to populate the dropdown. */
  options: {
    /** Display text for the option. */
    name: string
    /** Value submitted with the form. */
    value: string | number
  }[]
}

/** Configuration for a checkbox input. */
export interface BooleanType extends BaseElement {
  type: "boolean"
  /** Initial checked state. */
  value?: boolean
}

/** Union of all supported element configuration types. */
export type ElementType = StringType | NumberType | ChooseType | BooleanType

/**
 * A simple type map for storing form values.
 * Useful for aggregating data from multiple form elements.
 */
export type FormValueMap = Record<string, any>

/**
 * Factory class to create DOM form elements from a configuration object.
 *
 * @example
 * const nameInput = FormElementFactory.create({
 *   type: 'string',
 *   name: 'username',
 *   label: 'Username',
 *   placeholder: 'Enter username'
 * });
 *
 * document.body.appendChild(nameInput);
 */
export class FormElementFactory {
  /**
   * Creates a DOM form element based on the provided configuration.
   * Returns a wrapper `div` with the class `form-group` containing
   * the label (if provided) and the input/select element.
   *
   * @param config - The configuration object defining the element type and attributes.
   * @returns A wrapper `HTMLElement` containing the form control.
   * @throws {Error} If the element type in the configuration is not supported.
   */
  public static create(config: ElementType): HTMLElement {
    const wrapper = document.createElement("div")
    wrapper.className = "form-group"

    // Create and append label if defined
    if (config.label) {
      const label = document.createElement("label")
      label.textContent = config.label
      if (config.id) label.htmlFor = config.id
      wrapper.appendChild(label)
    }

    let input: HTMLInputElement | HTMLSelectElement

    // Create input element based on type
    switch (config.type) {
      case "string":
        input = this.createInput(config, "text")
        break
      case "number":
        input = this.createInput(config, "number")
        if (config.min !== undefined)
          (input as HTMLInputElement).min = String(config.min)
        if (config.max !== undefined)
          (input as HTMLInputElement).max = String(config.max)
        break
      case "boolean":
        input = this.createInput(config, "checkbox")
        if (config.value) (input as HTMLInputElement).checked = config.value
        break
      case "choose":
        input = this.createSelect(config)
        break
      default:
        // Exhaustive check to ensure all types are handled
        throw new Error(`Unsupported element type: ${(config as any).type}`)
    }

    // Set common attributes
    if (config.id) input.id = config.id
    if (config.name) input.name = config.name
    if (config.disabled) input.disabled = config.disabled

    // Set value (not for checkboxes as they use 'checked')
    if (config.type !== "boolean" && config.value !== undefined) {
      input.value = String(config.value)
    }

    wrapper.appendChild(input)
    return wrapper
  }

  /**
   * Creates an `<input>` element with basic attributes.
   *
   * @private
   * @param config - Configuration containing placeholder and value.
   * @param inputType - The HTML input type (e.g., 'text', 'number', 'checkbox').
   * @returns The configured HTMLInputElement.
   */
  private static createInput(
    config: BaseElement & { value?: any },
    inputType: string,
  ): HTMLInputElement {
    const input = document.createElement("input")
    input.type = inputType
    if (config.placeholder) input.placeholder = config.placeholder
    return input
  }

  /**
   * Creates a `<select>` element with options.
   *
   * @private
   * @param config - Configuration containing options and potentially a default value.
   * @returns The configured HTMLSelectElement.
   */
  private static createSelect(config: ChooseType): HTMLSelectElement {
    const select = document.createElement("select")

    config.options.forEach((opt) => {
      const option = document.createElement("option")
      option.value = String(opt.value)
      option.textContent = opt.name
      select.appendChild(option)
    })

    return select
  }
}
