// My Solution
export class Challenge {
  static solution(number: number) {
    if (number < 3) return 0;

    let total = 0;
    for (let i = 2; i < number; ++i) {
      if (i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }
    return total;
  }
}

// Best Practice
export class Challenge {
  static solution(num: number): number {
    let total: number = 0;
    for (let i: number = 0; i < num; i++) {
      total += (i % 5 == 0 || i % 3 == 0) ? i : 0;
    }
    return total;
  }
}
