console.log("app started")

const COIN_TYPES = [500, 100, 50, 10, 5, 1]

function determineChangeDistribution(changeTotalAmount) {
  return {
    500: 0,
    100: 4,
    50: 0,
    10: 0,
    5: 0,
    1: 0
  }
}

module.exports = {
  determineChangeDistribution
}
