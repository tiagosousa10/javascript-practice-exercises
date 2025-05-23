// total amount of points

const points = (games) => {
  return games.reduce((acc, game) => {
    const [x,y] = game.split(':') // x = 1, y = 2
    const points = x > y ? 3 : x === y ? 1 : 0;
    acc += points;
    return acc
  })
}
