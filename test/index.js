const implementations = require('../implementations')

Object.keys(implementations).forEach((implementation) => {
  describe(`Implementation #${implementation}`, () => {
    it('returns 1', () => {
      const result = implementations[implementation]([0])

      if (result !== 1) {
        throw new Error(`Expected 1 but got ${result}`)
      }
    })

    it('returns 5', () => {
      const result = implementations[implementation]([-1, 4, 3, 2, 1])

      if (result !== 5) {
        throw new Error(`Expected 5 but got ${result}`)
      }
    })

    it('returns 4', () => {
      const result = implementations[implementation]([1, 2, 3])

      if (result !== 4) {
        throw new Error(`Expected 4 but got ${result}`)
      }
    })

    it('returns 1', () => {
      const result = implementations[implementation]([-1, -3])

      if (result !== 1) {
        throw new Error(`Expected 1 but got ${result}`)
      }
    })
  })
})