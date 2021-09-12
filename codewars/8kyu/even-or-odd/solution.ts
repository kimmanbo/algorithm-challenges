// My Solution
export function even_or_odd(n:number):String {
  return n % 2 === 0 ? 'Even' : 'Odd';
}

// Best Practice
export function even_or_odd(n:number):String {
  return n % 2 == 0 ? "Even" : "Odd";
}
