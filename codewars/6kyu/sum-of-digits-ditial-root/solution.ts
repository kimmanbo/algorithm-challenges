// My Solution
export const digitalRoot = (n:number):number => {
  if (n == 0) return 0;

  while (true) {
    let digits = Math.max(Math.floor(Math.log10(n)), 0);
    let sum = 0;
    for (let i = digits; i >= 0; --i) {
      const digit = Math.floor(n / (10 ** i || 1));
      sum += digit;
      n -= digit * (10 ** i || 1);
    }
    if (Math.floor(Math.log10(sum)) == 0) {
      return sum;
    }
    n = sum;
  }
};

// Clever
export function digitalRoot(n: number): number {
  return (n - 1) % 9 + 1;
}

// Best Practice
export const digitalRoot = (n:number):number => {
  while (n >= 10) {
    n = n.toString()
      .split('')
      .map(x => parseInt(x))
      .reduce((a, b) => a + b, 0)
  }
  return n
};
