import { HttpError } from 'wasp/server'

export const getCars = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Car.findMany({
    where: {
      ownerId: context.user.id
    }
  });
}

export const getBikes = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }
  return context.entities.Bike.findMany({
    where: {
      ownerId: context.user.id
    }
  });
}
