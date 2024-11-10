const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]) => {
  let isValid = keys?.every((key) => key in obj);
  return isValid;
};

const person1 = { name: 'Alice', age: 25, email: 'alice@example.com' };
console.log(validateKeys(person1, ['name', 'age']));
