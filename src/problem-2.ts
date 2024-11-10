const removeDuplicates = (numArray: number[]): number[] => {
  return [...new Set(numArray)];
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
