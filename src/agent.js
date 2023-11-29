class Agent {
  constructor(phase) {
    if(phase instanceof Phase) {
      this.phase = phase;
    } else {
      this.phase = Vacuum;
    }
    
    this.dirs = Dirs(phase);
  }
}
