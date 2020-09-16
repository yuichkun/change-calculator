const { determineChangeDistribution } = require('./app')
describe("app", () => {
  describe("determineChangeDistribution", () => {
    it("returns 100yen * 4 when change total amount is 400", () => {
      const changeDistribution = determineChangeDistribution(400)
      expect(changeDistribution).toEqual({
        500: 0,
        100: 4,
        50: 0,
        10: 0,
        5: 0,
        1: 0
      })
    })
  })
})