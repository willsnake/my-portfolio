import { cleanup, render, screen } from '@testing-library/svelte'
import Button from './Button.svelte'

describe('Button', () => {
  // TODO: @testing-library/svelte claims to add this automatically but it doesn't work without explicit afterEach
  afterEach(() => cleanup())

  it('mounts', () => {
    render(Button)
    const button = screen.getByRole('button')
    expect(button).toBeTruthy()
    expect(button.textContent).toBe('Click Me!')
  })
})