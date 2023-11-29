class Phase {
  constructor(type) {
    this.type = type;
  }
}

Vacuum = Object.freeze(new Phase(0));
Gas = Object.freeze(new Phase(2));
Liquid = Object.freeze(new Phase(3));
Solid = Object.freeze(new Phase(4));
Granule = Object.freeze(new Phase(5));
//Electrolye = Object.freeze(new Phase(6));
//Plasma = Object.freeze(new Phase(7));
Wall = Object.freeze(new Phase(1));

PhaseName = [
  "Vacuum",
  "Wall",
  "Gas",
  "Liquid",
  "Solid",
  "Granule",
];
