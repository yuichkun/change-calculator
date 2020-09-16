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
    it("returns 500yen * 1, 50yen * 1, 1yen * 1 when change total amount is 551", () => {
      const changeDistribution = determineChangeDistribution(551)
      expect(changeDistribution).toEqual({
        500: 1,
        100: 0,
        50: 1,
        10: 0,
        5: 0,
        1: 1
      })
    })
    it("returns 500yen * 3, 100yen * 3, 50yen * 1, 10yen * 2, 5yen * 1, 1yen * 1 when change total amount is 1876", () => {
      const changeDistribution = determineChangeDistribution(1876)
      expect(changeDistribution).toEqual({
        500: 3,
        100: 3,
        50: 1,
        10: 2,
        5: 1,
        1: 1
      })
    })
    it("returns 500yen * 1, 100yen *1 when change total amount is 600", () => {
      const changeDistribution = determineChangeDistribution(600)
      expect(changeDistribution).toMatchSnapshot()
    })
  })
})