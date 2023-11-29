function Space(width, height) {
  let row = Array(width).fill(0);
  let space = [];
  for(let i = 0; i < height; i++) {
    space.push(row);
  }
  return space;
}
