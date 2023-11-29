class Agent {
  constructor(phase) {
    if(phase instanceof Phase) {
      this.phase = phase;
    } else {
      this.phase = Vacuum;
    }
    
    this.dirs = createDirs(this.phase);
    this.color = Colors(this.phase.type);
  }
}
