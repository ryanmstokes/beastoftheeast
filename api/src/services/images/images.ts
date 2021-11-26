import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const images = () => {
  return db.image.findMany()
}

export const image = ({ id }: Prisma.ImageWhereUniqueInput) => {
  return db.image.findUnique({
    where: { id },
  })
}

interface CreateImageArgs {
  input: Prisma.ImageCreateInput
}

export const createImage = ({ input }: CreateImageArgs) => {
  return db.image.create({
    data: input,
  })
}

interface UpdateImageArgs extends Prisma.ImageWhereUniqueInput {
  input: Prisma.ImageUpdateInput
}

export const updateImage = ({ id, input }: UpdateImageArgs) => {
  return db.image.update({
    data: input,
    where: { id },
  })
}

export const deleteImage = ({ id }: Prisma.ImageWhereUniqueInput) => {
  return db.image.delete({
    where: { id },
  })
}
