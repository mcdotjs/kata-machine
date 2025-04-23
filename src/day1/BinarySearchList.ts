export default function bs_list(haystack: number[], needle: number): boolean {
  let high = haystack.length
  let low = 0
  while (low < high) {
    let middleIndex = Math.floor(low + (high - low) / 2)
    console.log({ low, high, middleIndex })
    if (haystack[middleIndex] == needle) {
      return true
    } else if (needle > haystack[middleIndex]) {
      //drop the midd point
      low = middleIndex + 1
    } else {
      high = middleIndex
    }
  }
  return false
}
