function createSpace(width, height) {
  let space = [];
  for(let i = 0; i < height; i++) {
    let row = Array(width).fill(0);
    space.push(row);
  }
  return space;
}

function addWallTo(space) {
  space[0].fill(-1);
  space.at(-1).fill(-1);
  for(let i = 1; i < space.length - 1; i++) {
    space[i][0] = -1;
    space[i][space[i].length - 1] = -1;
  }
}