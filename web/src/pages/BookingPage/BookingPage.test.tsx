import { render } from '@redwoodjs/testing/web'

import BookingPage from './BookingPage'

describe('BookingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BookingPage />)
    }).not.toThrow()
  })
})
