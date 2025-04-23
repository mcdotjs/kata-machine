export default function bubble_sort(arr: number[]): void {
  let len = arr.length
  // while (len > 1) {
  //   for (let i = 0; i < len; ++i) {
  //     if (arr[i] > arr[i + 1]) {
  //       let temp = arr[i]
  //       arr[i] = arr[i + 1]
  //       arr[i + 1] = temp
  //     }
  //   }
  //   --len
  // }
  //
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    len--
  }
  console.log(arr)
}
