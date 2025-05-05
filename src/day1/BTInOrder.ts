function walk(n: BinaryNode<number> | null, path: number[]): number[] {
  //base
  if (!n) {
    return path
  }

  //recurse
  //pre
  //NOTE: ked dam prec z param null type
  // if (n.left) {
  
  // recurse
  walk(n.left, path)
  //}

  //if (n.right) {
  path.push(n.value)
  walk(n.right, path)
  //}
  
  //post
  return path
}
export default function in_order_search(head: BinaryNode<number>): number[] {
  let arr = [] as number[]
  walk(head, arr)

  return arr

}
