function qs(arr: number[], lo: number, hi: number): void {
  //console.log(arr)
  // base case ... when low meets high
  if (lo >= hi) {
    return;
  }
  //this thind is gonna do weak sort
  //is gonna set the pivot into the correct, then return pivots index
  const pivotIdx = partition(arr, lo, hi)
  // IT'S INCLUSIVE ENDIGS
  qs(arr, lo, pivotIdx - 1)
  qs(arr, pivotIdx + 1, hi)

}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]
  // why -1... this is weakly sorting thing (????)
  let idx = lo - 1

  //NOTE: walk form the low to the hi, but not including hi
  // this is weak sort
  // each element has to be compared to the pivot

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++
      const temp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = temp
    }
  }
  idx++
  arr[hi] = arr[idx]
  arr[idx] = pivot
  return idx
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1)
}
