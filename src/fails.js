// 20231130 Tested dan ok for some value only.
// replaced by divOf
function divOf_0(space, width, color) {
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
      cell.style.background = Colors[space[i][j]];
      div.append(cell);
      
    }
  }
  return div;
}
