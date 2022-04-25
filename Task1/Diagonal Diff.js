let matrix = [[1,2,3],[4,5,6],[7,8,9]]
let diagOne = 0
let diagTwo = 0
for(let i = 0; i < matrix.length; ++i)
  {
    diagOne += matrix[i][i]
}
let temp = matrix.length - 1
for(let i = 0; i < matrix.length; ++i)
  {
    diagTwo += matrix[i][temp]
    temp -= 1
  }
console.log("ABsolute Difference is: ", Math.abs(diagOne - diagTwo))
