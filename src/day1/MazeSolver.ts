const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  //basecases
  // of the map
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false
  }

  if (maze[curr.y][curr.x] === wall) {
    return false
  }

  if (curr.x == end.x && curr.y == end.y) {
    //!!!!
    path.push(end)
    return true
  }

  // NOTE: fantazia
  if (seen[curr.y][curr.x]) {
    return false
  }

  // 3 steps in recurse case
  //NOTE: everytime we successfully visit a spot
  //we will add that in precondition and remove it in post condition
  // pre
  seen[curr.y][curr.x] = true
  path.push(curr)
  // recurse
  for (let i = 0; i < dir.length; ++i) {
    const [x, y] = dir[i]
    if (
      walk(maze, wall, {
        x: curr.x + x,
        y: curr.y + y,
      },
        end,
        seen,
        path
      )) {
      return true
    }
  }
  // post
  path.pop()
  return false
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

  const path: Point[] = []
  const seen: boolean[][] = []
  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false))
  }
  walk(maze, wall, start, end, seen, path)
  return path
  //ako foreachnut cely maze array s tym ze ked tam nic neni tak zapisem suradnicu do drahy
  //vytvor novu walk funkciu
}
