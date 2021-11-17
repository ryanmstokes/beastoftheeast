import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const bookings = () => {
  return db.booking.findMany()
}

export const booking = ({ id }: Prisma.BookingWhereUniqueInput) => {
  return db.booking.findUnique({
    where: { id },
  })
}

interface CreateBookingArgs {
  input: Prisma.BookingCreateInput
}

export const createBooking = ({ input }: CreateBookingArgs) => {
  return db.booking.create({
    data: input,
  })
}

interface UpdateBookingArgs extends Prisma.BookingWhereUniqueInput {
  input: Prisma.BookingUpdateInput
}

export const updateBooking = ({ id, input }: UpdateBookingArgs) => {
  return db.booking.update({
    data: input,
    where: { id },
  })
}

export const deleteBooking = ({ id }: Prisma.BookingWhereUniqueInput) => {
  return db.booking.delete({
    where: { id },
  })
}
