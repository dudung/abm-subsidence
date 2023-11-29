class Phase {
  constructor(type) {
    this.type = type;
  }
}

Vacuum = Object.freeze(new Phase(0));
Gas = Object.freeze(new Phase(1));
Fluid = Object.freeze(new Phase(2));
Solid = Object.freeze(new Phase(3));
Granule = Object.freeze(new Phase(4));
Electrolye = Object.freeze(new Phase(5));
Plasma = Object.freeze(new Phase(6));
