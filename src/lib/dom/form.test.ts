import { describe, it, expect } from "vitest"
import { FormElementFactory } from "./form"

describe("DOM Utilities", () => {
  describe("FormElementFactory", () => {
    describe("create", () => {
      it("creates a string input with label and placeholder", () => {
        const wrapper = FormElementFactory.create({
          type: "string",
          id: "username",
          name: "user",
          label: "Username",
          placeholder: "Enter name",
          value: "John",
        })

        expect(wrapper.className).toBe("form-group")

        const label = wrapper.querySelector("label")
        expect(label).toBeTruthy()
        expect(label?.textContent).toBe("Username")
        expect(label?.htmlFor).toBe("username")

        const input = wrapper.querySelector("input")
        expect(input).toBeTruthy()
        expect(input?.type).toBe("text")
        expect(input?.id).toBe("username")
        expect(input?.name).toBe("user")
        expect(input?.placeholder).toBe("Enter name")
        expect(input?.value).toBe("John")
      })

      it("creates a number input with min and max", () => {
        const wrapper = FormElementFactory.create({
          type: "number",
          id: "age",
          label: "Age",
          min: 0,
          max: 120,
          value: 25,
        })

        const input = wrapper.querySelector("input") as HTMLInputElement
        expect(input).toBeTruthy()
        expect(input.type).toBe("number")
        expect(input.min).toBe("0")
        expect(input.max).toBe("120")
        expect(input.value).toBe("25")
      })

      it("creates a boolean checkbox", () => {
        const wrapper = FormElementFactory.create({
          type: "boolean",
          id: "subscribe",
          label: "Subscribe",
          value: true,
        })

        const input = wrapper.querySelector("input") as HTMLInputElement
        expect(input).toBeTruthy()
        expect(input.type).toBe("checkbox")
        expect(input.checked).toBe(true)
      })

      it("creates a select dropdown with options", () => {
        const wrapper = FormElementFactory.create({
          type: "choose",
          id: "color",
          label: "Color",
          options: [
            { name: "Red", value: "red" },
            { name: "Blue", value: "blue" },
          ],
          value: "red",
        })

        const select = wrapper.querySelector("select")
        expect(select).toBeTruthy()

        const options = select?.querySelectorAll("option")
        expect(options?.length).toBe(2)
        expect(options?.[0].value).toBe("red")
        expect(options?.[0].textContent).toBe("Red")
        expect(options?.[1].value).toBe("blue")
        expect(options?.[1].textContent).toBe("Blue")

        expect(select?.value).toBe("red")
      })

      it("handles disabled state", () => {
        const wrapper = FormElementFactory.create({
          type: "string",
          label: "Disabled Input",
          disabled: true,
        })

        const input = wrapper.querySelector("input")
        expect(input?.disabled).toBe(true)
      })

      it("creates element without label if not provided", () => {
        const wrapper = FormElementFactory.create({
          type: "string",
          name: "no-label",
        })

        const label = wrapper.querySelector("label")
        expect(label).toBeFalsy()

        const input = wrapper.querySelector("input")
        expect(input).toBeTruthy()
        expect(input?.name).toBe("no-label")
      })

      it("throws error for unsupported type", () => {
        expect(() => {
          FormElementFactory.create({
            type: "unsupported" as any,
          })
        }).toThrow("Unsupported element type: unsupported")
      })
    })
  })
})
