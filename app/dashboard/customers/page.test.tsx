import { describe, test, expect } from "vitest"
import Page from "./page"
import { render, screen } from "@testing-library/react"

describe("Page", () => {
  test("show Customers Page", async () => {
    render(<Page />)

    expect(screen.getByText("Customers Page")).toBeInTheDocument()
  })
})
