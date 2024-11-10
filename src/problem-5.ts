const getProperty = <T>(obj: T, property: keyof T) => {
  return obj[property];
};

const person = { name: 'Alice', age: 30 };
console.log(getProperty(person, 'age'));
