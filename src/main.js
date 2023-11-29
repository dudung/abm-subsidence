function test() {
  t_divofspace();
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


// url https://stackoverflow.com/a/35970186/9475509
function invertColor(hex, bw) {
  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
  }
  
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}
