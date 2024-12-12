import { HttpError } from 'wasp/server'

export const createCar = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  const newCar = await context.entities.Car.create({
    data: {
      make: args.make,
      model: args.model,
      year: args.year,
      price: args.price,
      owner: { connect: { id: context.user.id } }
    }
  });

  return newCar;
}

export const createBike = async (args, context) => {
  if (!context.user) { throw new HttpError(401); }

  const bike = await context.entities.Bike.create({
    data: {
      make: args.make,
      model: args.model,
      year: args.year,
      price: args.price,
      owner: { connect: { id: context.user.id } }
    }
  });

  return bike;
}
