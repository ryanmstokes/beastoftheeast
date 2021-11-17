import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookingCreateArgs>({
  booking: {
    one: {
      data: { email: 'String9458083', name: 'String', lastName: 'String' },
    },
    two: {
      data: { email: 'String1752349', name: 'String', lastName: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
