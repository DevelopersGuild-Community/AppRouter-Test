import { render } from "@testing-library/react"
import CreateForm from "./create-form"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

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

  test("フォームに正常な値が入力される", async () => {
    render(
      <CreateForm
        customers={[
          {
            id: "1",
            name: "John Doe",
          },
          {
            id: "2",
            name: "Hannah Montana",
          },
        ]}
      />
    )
    const selectBox = screen.getByRole("combobox")
    await userEvent.selectOptions(selectBox, "John Doe")
    expect(selectBox).toHaveValue("1")

    const input = screen.getByRole("spinbutton")
    await userEvent.type(input, "100")
    expect(input).toHaveValue(100)

    const radios = screen.getAllByRole("radio")
    await userEvent.click(radios[0])
    expect(radios[0]).toBeChecked()
    const submitButton = screen.getByRole("button", {
      name: "Create Invoice",
    })
    await userEvent.click(submitButton)

    // expect(screen.getByText("Something went wrong")).toBeInTheDocument()
  })
})
