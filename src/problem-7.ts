class Car {
  constructor(public make: string, public model: string, public year: number) {}

  getCarAge() {
    const currentYear = new Date()?.getFullYear();
    const age = currentYear - this.year;
    return `${age} (assuming current year is ${currentYear})`;
  }
}

const car = new Car('Honda', 'Civic', 2018);
console.log(car.getCarAge());
