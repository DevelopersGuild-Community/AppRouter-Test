import { render } from "@testing-library/react"
import CreateForm from "./create-form"
import { screen } from "@testing-library/react"

describe("CreateForm", () => {
  beforeEach(() => {
    vitest.mock("react-dom", () => {
      const originalModule = vitest.importActual("react-dom")

      return {
        ...originalModule,
        useFormState: () => [[{ message: null, errors: {} }, vitest.fn()]],
        useFormStatus: () => ({ pending: false }),
      }
    })
    vitest.mock("../../lib/actions", () => ({
      createInvoice: vitest.fn().mockReturnValue(
        new Promise((resolve) =>
          resolve({
            massage: "Something went wrong",
            errors: [],
          })
        )
      ),
    }))
  })

  test("formが表示される", () => {
    render(<CreateForm customers={[]} />)
    expect(screen.getByLabelText("Choose customer")).toBeInTheDocument()
  })
})
