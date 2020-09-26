const symbol = Symbol('demo');
const other = Symbol('demo');

console.log(symbol);
console.log(other);
console.log(symbol == other); // false

const obj = {
  name: 'Elena',
  demo: 'DEMO',
  [symbol]: 'meta'
};

console.log(obj);