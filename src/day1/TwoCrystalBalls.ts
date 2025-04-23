export default function two_crystal_balls(breaks: boolean[]): number {
  let jumpAmount = Math.floor(Math.sqrt(breaks.length))
  let i = jumpAmount
  //i growing + jumpAmaount
  for (; i < breaks.length; i += jumpAmount) {

    if (breaks[i]) {
      break
    }
  }
  // going backwards
  i -= jumpAmount
  //i,j growing 1
  for (let j = 0; j <= jumpAmount; ++j, ++i) {
    if (breaks[i]) {
      return i
    }
  }
  return -1
}
