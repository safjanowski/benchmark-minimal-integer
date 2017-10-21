# benchmark-minimal-integer
Benchmarks algorithms from `implementations` directory

## Constraints
Write a function: `function solution(A);` that, given an array **A** of **N** integers, returns the smallest positive integer (greater than 0) that does not occur in **A**.

For example, 
* given `A = [1, 3, 6, 4, 1, 2]`, the function should return `5`.
* given `A = [1, 2, 3],` the function should return `4`.
* given `A = [−1, −3]`, the function should return `1`.

### Assume that:
* **N** is an integer within the range **[1..100,000]**;
* each element of array A is an integer within the range **[−1,000,000..1,000,000]**.

### Complexity:
* expected worst-case time complexity is **O(N)**;
* expected worst-case space complexity is **O(N)**, beyond input storage (not counting the storage required for input arguments).

Elements of input arrays can be modified.

## Execution
`npm run execute`

## How to add new implementations?
Just put it to the `./implementations` directory. Don’t forget to extend `./implementations/index.js` with path to the new algorithm

## Licence
MIT

## Any question?
Feel free to ask me on Twitter – https://twitter.com/safjanowski