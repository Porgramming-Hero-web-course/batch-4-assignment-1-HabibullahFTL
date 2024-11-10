const countWordOccurrences = (sentence: string, word: string): number => {
  const words = sentence
    ?.toLowerCase()
    ?.replace(/[^\w\s]/g, ' ')
    ?.split(' ');
  const targetWord = word.toLowerCase();
  let count = 0;

  //  Counting the matched words
  words?.forEach((w) => {
    if (w === targetWord) count += 1;
  });

  return count;
};

console.log(
  countWordOccurrences(
    'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to TypeScript. It is designed for the development of large applications and typeScript.ki to JavaScript.',
    'typescript'
  )
);
