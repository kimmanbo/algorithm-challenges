// My Solution
export function accum(s: string): string {
  const characters = Array.from(s);

  let ret = '';
  characters.forEach((value, i) => {
    if (i > 0) {
      ret += '-';
    }
    const repeat = i + 1;
    const series = value.repeat(repeat);
    ret += series.charAt(0).toUpperCase() + series.slice(1).toLowerCase();
  });

  return ret;
}

// Best Practice
export function accum(s: string): string {
  return s.split('')
  .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
  .join('-');
}
