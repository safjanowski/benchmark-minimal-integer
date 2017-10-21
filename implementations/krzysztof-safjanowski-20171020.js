module.exports = (params) => {
  const arr = Array.from(new Array(Math.pow(10, 6)), (val, index) => index + 1)

  for (let i = 0; i < params.length; i += 1) {
    if (params[i] > 0) {
      arr[params[i]] = null
    }
  }

  let i = 0;

  do {
    i += 1
  } while (arr[i] == null && i <= arr.length)

  return arr[i] - 1
}