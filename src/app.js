console.log("app started")

const COIN_TYPES = [500, 100, 50, 10, 5, 1]

function determineChangeDistribution(changeTotalAmount) {
  let rest = changeTotalAmount

  let distribution = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
    5: 0,
    1: 0
  }

  for (let i = 0; i < COIN_TYPES.length; i++){
    const coinType = COIN_TYPES[i]
    const quotient = Math.floor(rest / coinType)
    if (quotient > 0) {
      distribution[coinType] = quotient
      rest -= quotient * coinType
    }
  }

  return distribution
}

module.exports = {
  determineChangeDistribution
}
