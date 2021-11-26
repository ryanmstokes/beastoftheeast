import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.VehicleCreateArgs>({
  vehicle: {
    one: {
      data: {
        imgID: 'Int',
        title: 'String',
        description: 'String',
        passengers: 'Int',
        extras: 'String',
        cover: 'String',
        fees: 'String',
        price: 'Int',
      },
    },
    two: {
      data: {
        imgID: 'Int',
        title: 'String',
        description: 'String',
        passengers: 'Int',
        extras: 'String',
        cover: 'String',
        fees: 'String',
        price: 'Int',
      },
    },
  },
})

export type StandardScenario = typeof standard
