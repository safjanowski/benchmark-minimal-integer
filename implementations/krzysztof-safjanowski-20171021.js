module.exports = (p) => {
  let a = new Array

  for (let i = 0; i <= p.length; i += 1) {
    if (p[i] > 0) a[p[i]] = null
  }

  let i = 0

  do {
    i += 1
  } while (a[i] === null && i < a.length)

  return i
}
