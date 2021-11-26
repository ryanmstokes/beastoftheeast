import {
  vehicles,
  vehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from './vehicles'
import type { StandardScenario } from './vehicles.scenarios'

describe('vehicles', () => {
  scenario('returns all vehicles', async (scenario: StandardScenario) => {
    const result = await vehicles()

    expect(result.length).toEqual(Object.keys(scenario.vehicle).length)
  })

  scenario('returns a single vehicle', async (scenario: StandardScenario) => {
    const result = await vehicle({ id: scenario.vehicle.one.id })

    expect(result).toEqual(scenario.vehicle.one)
  })

  scenario('creates a vehicle', async () => {
    const result = await createVehicle({
      input: {
        imgID: 'Int',
        title: 'String',
        description: 'String',
        passengers: 'Int',
        extras: 'String',
        cover: 'String',
        fees: 'String',
        price: 'Int',
      },
    })

    expect(result.imgID).toEqual('String')
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.passengers).toEqual('String')
    expect(result.extras).toEqual('String')
    expect(result.cover).toEqual('String')
    expect(result.fees).toEqual('String')
    expect(result.price).toEqual('String')
  })

  scenario('updates a vehicle', async (scenario: StandardScenario) => {
    const original = await vehicle({ id: scenario.vehicle.one.id })
    const result = await updateVehicle({
      id: original.id,
      input: { imgID: 'String2' },
    })

    expect(result.imgID).toEqual('String2')
  })

  scenario('deletes a vehicle', async (scenario: StandardScenario) => {
    const original = await deleteVehicle({ id: scenario.vehicle.one.id })
    const result = await vehicle({ id: original.id })

    expect(result).toEqual(null)
  })
})
