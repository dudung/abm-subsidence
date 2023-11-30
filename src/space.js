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

function divOf(space, width, color) {
  let div = document.createElement("div");
  let ROW = space.length;
  let COL = space[0].length;
  
  div.style.width = width + "px";
  div.style.border = "0px solid black";
  
  let size = (width / COL) - 2;
  for(let i = 0; i < ROW; i++) {
    for(let j = 0; j < COL; j++) {
      let cell = document.createElement("div");
      cell.style.width = size + "px";
      cell.style.height = size + "px";
      cell.style.display = "inline-block";
      cell.style.borderStyle = "solid";
      cell.style.borderColor = color;
      if(i == 0 && j == 0) {
        cell.style.borderWidth = "1px 1px 1px 1px";
      } else if(i == 0) {
        cell.style.borderWidth = "1px 1px 1px 0";
      } else if(j == 0) {
        cell.style.borderWidth = "0 1px 1px 1px";
      } else {
        cell.style.borderWidth = "0 1px 1px 0";
      }
      cell.style.margin = "-2px 0px";
      div.append(cell);
      
    }
  }
  return div;
}
