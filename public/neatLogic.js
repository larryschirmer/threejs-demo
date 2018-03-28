Array.prototype.max = function() {
	return Math.max.apply(null, this);
};

Array.prototype.min = function() {
	return Math.min.apply(null, this);
};

function normalizePoint(v, data) {
  let max = data.max();
  let min = data.min();
  let top = v - min;
  let bottom = max - min;
  return top / bottom;
}

function restore(value, data) {
  let max = data.max();
  let min = data.min();

  return value * max + min;
}

var Node = neataptic.Node;
var Neat = neataptic.Neat;
var Network = neataptic.Network;
var Methods = neataptic.Methods;
var Architect = neataptic.Architect;

let humidity = [
  75,
  75,
  75,
  75,
  100,
  100,
  100,
  100,
  100,
  78,
  78,
  78,
  78,
  58,
  58,
  58,
  58,
  17,
  17,
  17,
  17,
  2,
  2,
  2,
  2,
  2,
];

let temp = [
  86,
  68,
  50,
  41,
  96.8,
  86,
  68,
  50,
  42.8,
  41,
  50,
  68,
  86,
  45.5,
  50,
  68,
  86,
  53.6,
  59,
  68,
  86,
  69.8,
  71.6,
  77,
  86,
  104,
];

let years = [
  125,
  625,
  2500,
  5800,
  1,
  100,
  400,
  1750,
  3750,
  5000,
  2500,
  500,
  100,
  5200,
  2900,
  625,
  100,
  5750,
  2500,
  1100,
  100,
  6000,
  5000,
  2800,
  1300,
  400,
];
