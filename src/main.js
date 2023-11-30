function test() {
  t_divofspace();
  //t_colors();
}


// 20231130 Tested and ok.
function t_divofspace() {
  let space = createSpace(20, 10);
  addWallTo(space);
  space[1][1] = Gas.type;
  space[2][2] = Liquid.type;
  space[3][3] = Solid.type;
  space[4][4] = Granule.type;
  let div = divOf(space, 500, "#aaf");
  document.body.append(div);
}


// 20231130 Tested and ok.
function t_colors() {
  let j = 0;
  for(let i of Colors) {
    let div = document.createElement("div");
    with(div) {
      style.border = "1px solid #888";
      style.width = "100px";
      style.height = "20px";
      style.display = "inline-block";
      style.borderRadius = "5px";
      style.background = i;
      style.color = invertColor(i);
      style.textAlign = "center";
      innerHTML = PhaseName[j];
      j++;
    }
    document.body.append(div);
  }
}
