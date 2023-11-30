function test() {
  t_divofspace();
  //t_colors();
}


// 20231130 Testing.
function t_divofspace() {
  let space = createSpace(10, 6);
  addWallTo(space);
  let div = divOf(space, 600);
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
