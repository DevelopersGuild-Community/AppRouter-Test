import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/minimum/page'

test('Page', () => {
    render(<Page />)
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})

// function sum(a: number, b: number) {
//     return a + b
// }

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3)
// })