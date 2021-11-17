import {
  bookings,
  booking,
  createBooking,
  updateBooking,
  deleteBooking,
} from './bookings'
import type { StandardScenario } from './bookings.scenarios'

describe('bookings', () => {
  scenario('returns all bookings', async (scenario: StandardScenario) => {
    const result = await bookings()

    expect(result.length).toEqual(Object.keys(scenario.booking).length)
  })

  scenario('returns a single booking', async (scenario: StandardScenario) => {
    const result = await booking({ id: scenario.booking.one.id })

    expect(result).toEqual(scenario.booking.one)
  })

  scenario('creates a booking', async () => {
    const result = await createBooking({
      input: { email: 'String3444991', name: 'String', lastName: 'String' },
    })

    expect(result.email).toEqual('String3444991')
    expect(result.name).toEqual('String')
    expect(result.lastName).toEqual('String')
  })

  scenario('updates a booking', async (scenario: StandardScenario) => {
    const original = await booking({ id: scenario.booking.one.id })
    const result = await updateBooking({
      id: original.id,
      input: { email: 'String68404532' },
    })

    expect(result.email).toEqual('String68404532')
  })

  scenario('deletes a booking', async (scenario: StandardScenario) => {
    const original = await deleteBooking({ id: scenario.booking.one.id })
    const result = await booking({ id: original.id })

    expect(result).toEqual(null)
  })
})
