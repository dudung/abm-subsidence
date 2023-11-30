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

// 20231130 Testted and ok, replacement for divOf_0.
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
      cell.style.borderStyle = "solid";
      cell.style.borderColor = color;
      cell.style.borderWidth = "1px 1px 1px 1px";
      cell.style.margin = "0 0";
      cell.style.background = Colors[space[i][j]];
      cell.style.position = "absolute";
      cell.style.left = (j * size) + "px";
      cell.style.top = (i * size) + "px";
      cell.addEventListener("mouseenter", enterDiv);
      cell.addEventListener("mouseleave", leaveDiv);
      div.append(cell);
    }
  }
  return div;
}


function enterDiv(event) {
  let div = event.target;
  addClass(div, "hover");
}

function leaveDiv(event) {
  let div = event.target;
  removeClass(div, "hover");
}