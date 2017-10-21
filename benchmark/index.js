const Benchmark = require('benchmark');
const implementations = require('../implementations')
const suite = new Benchmark.Suite;

const sampleInput = () => {
  return [
    [0],
    [-1, 4, 3, 2, 1],
    [1, 3, 6, 4, 1, 2],
    [1, 2, 3],
    [-1, -3]
  ]
}

const benchmarks = (benchmarks) => {
  benchmarks.forEach((benchmark) => {
    suite
      .add(`Implementation #${benchmark}`, function () {
        sampleInput().map(implementations[benchmark])
      })
  })
  return suite
}

benchmarks(Object.keys(implementations))
  .on('start', () => console.log(`Benchmarks started for ${Object.keys(implementations).length} suites:`))
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({
    'async': true
  });