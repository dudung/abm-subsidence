function createSpace(width, height) {
  let space = [];
  for(let i = 0; i < height; i++) {
    let row = Array(width).fill(0);
    space.push(row);
  }
  return space;
}

function addWallTo(space) {
  space[0].fill(Wall.type);
  space.at(-1).fill(Wall.type);
  for(let i = 1; i < space.length - 1; i++) {
    space[i][0] = Wall.type;
    space[i][space[i].length - 1] = Wall.type;
  }
}

function textOf(space) {
  let dig = 2;
  let sep = ' ';
  
  let text = "";
  let ROW = space.length;
  let COL = space[0].length;
  for(let i = 0; i < ROW; i++) {
    let row = "";
    for(let j = 0; j < COL; j++) {
      row += String(space[i][j]).padStart(dig, 0);
      if(j < COL - 1) row += sep;
    }
    text += row + '\n';
  }
  return text;
}

function divOf(space, width) {
  let div = document.createElement("div");
  let ROW = space.length;
  let COL = space[0].length;
  
  with(div.style) {
    width = width + "px";
    border = "1px solid black";
  }
  
  let size = (width / COL) + "px";
  console.log(size);
  for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < COL; j++) {
      let cell = document.createElement("div");
      with(cell.style) {
        width = "60px";
        height = "60px";
        display = "inline-block";
        border = "1px solid black";
        background = "#fff";
      }
      cell.innerHTML = "";
      div.append(cell);
    }
  }
  return div;
}
