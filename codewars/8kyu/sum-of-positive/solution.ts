// My Solution
export function positiveSum(arr:number[]):number {
  return arr.length === 0 ? 0 : arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0);
}

// Best Practice
export function positiveSum(arr:number[]):number {
  return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e , 0)
}
