const sumArray = (numArray: number[]): number => {
  return numArray?.reduce((prev: number, curr: number): number => {
    return prev + curr;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
