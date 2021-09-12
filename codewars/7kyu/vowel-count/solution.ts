// My Solution
export class Kata {
  static getCount(str: string) : number {
    return (str.match(/a|e|i|o|u/g) || []).length;
  }
}

// Best Practice
export class Kata {
  static getCount(str: string) {
    let list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }
}
