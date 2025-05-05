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
  walk(n.right, path)
  //}

  path.push(n.value)
  //post
  return path
}
export default function post_order_search(head: BinaryNode<number>): number[] {
  let arr = [] as number[]
  walk(head, arr)

  return arr

}
