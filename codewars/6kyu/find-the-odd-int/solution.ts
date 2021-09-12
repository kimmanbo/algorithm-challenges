// My Solution
export const findOdd = (xs: number[]): number => {
  const sorted = xs.sort();

  let key = sorted[0];
  let count = 1;
  sorted.shift();

  for (let value of sorted) {
    if (key !== value) {
      if (count % 2 !== 0) return key;
      count = 0;
      key = value;
    }
    count++;
  }

  if (count % 2 !== 0) return key;
  return 0;
};

// Clever: Used XOR... So clever but never use on production!
export const findOdd = (xs: number[]): number => {
  return xs.reduce((a,b)=> a^b);
};

// Best Practice
export const findOdd = (items: number[]): number => {
  const uniqueItems = Array.from(new Set(items))

  for (const uniqueItem of uniqueItems) {
    const numberOccurences = items.filter(item => item === uniqueItem).length
    if (isOdd(numberOccurences)) return uniqueItem
  }

  throw new Error('none found')
}

function isOdd(num: number): boolean {
  return num % 2 === 1
}
