function average() {
  return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length;
}

console.log(average(10, 20, 30, 40, 50));

// Rest
function average(...args) {
  return args.reduce((acc, i) => acc += i, 0) / args.length;
}

console.log(average(10, 20, 30, 40, 50));

// Spread
const array = [1, 2, 3, 5, 8, 13];
console.log('Spread --- ', ...array);
console.log('max num --- ', Math.max(...array));
console.log('min num --- ', Math.min(...array));

const fib = [1, ...array];
console.log('fib --- ', ...fib);

// Destructuring
const arr = [1, 2, 3, 5, 8, 13];
const [a, b] = arr;
console.log('const [a, b] = [arr] --- ', a, b);

// Object
const address = {
  country: 'Ukraine',
  city: 'Uzh',
  street: 'LL',
  concat: function() {
    return `${this.country}, ${this.city}, ${this.street}`;
  }
};

const {city, country, street, concat} = address;

console.log(concat.call(address));