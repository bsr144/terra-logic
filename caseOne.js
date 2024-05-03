function calculate_diagonal_sum(grid_size) {
  if (typeof grid_size === "number" && grid_size > 0) {
    let result = grid_size % 2 === 0 ? 0 : 1;
    const matrixInformation = {
      base: grid_size % 2 === 0 ? 1 : 2,
      addition: grid_size % 2 === 0 ? 1 : 3,
      stepsToTake: grid_size % 2 === 0 ? grid_size + grid_size : grid_size + grid_size - 2,
      countCorner: 3,
    };

    while (matrixInformation.stepsToTake > 0) {
      if (matrixInformation.countCorner === 0) {
        matrixInformation.countCorner = 4;
        matrixInformation.base += 2;
      }
      result += matrixInformation.addition;
      if (grid_size % 2 === 0) {
        matrixInformation.addition += matrixInformation.base;
      } else {
        matrixInformation.addition += matrixInformation.base;
      }
      matrixInformation.countCorner--;
      matrixInformation.stepsToTake--;
    }
    return result;
  }

  throw new Error(
    "grid size must be a number and must not below or equal to zero"
  );
}

console.log(calculate_diagonal_sum(1));
console.log(calculate_diagonal_sum(2));
console.log(calculate_diagonal_sum(3));
console.log(calculate_diagonal_sum(4));
console.log(calculate_diagonal_sum(5));
console.log(calculate_diagonal_sum(6));
console.log(calculate_diagonal_sum(7));
console.log(calculate_diagonal_sum(8));
