import cars from "./../models/car.js";

export const getAllCars = () => {
  return cars;
};

export const getCarById = ( id  ) => {
  return cars.filter(e => e.id == id)[0];
};
