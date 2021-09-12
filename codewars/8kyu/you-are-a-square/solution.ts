// My Work
export default function isSquare(n: number): boolean {
  if (n < 0) return false;
  if (n === 0) return true

  const root = Math.sqrt(n);
  return root % 1 === 0 ? true : false;
};

// Best Practice
export default function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
};
