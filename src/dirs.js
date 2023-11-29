function Dirs(phase) {
  // Vacuum
  let dirs = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  
  if(phase instanceof Phase) {
    if(phase == Gas) {
      dirs = [
        [1/8, 1/8, 1/8],
        [1/8, 0, 1/8],
        [1/8, 1/8, 1/8],
      ]
    } else if(phase == Liquid) {
      dirs = [
        [0, 0, 0],
        [1/5, 0, 1/5],
        [1/5, 1/5, 1/5],
      ]
    } else if(phase == Solid) {
      dirs = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
      ]
    } else if(phase == Granule) {
      dirs = [
        [0, 0, 0],
        [0, 0, 0],
        [1/3, 1/3, 1/3],
      ]
    }
  }
  
  return dirs;
}