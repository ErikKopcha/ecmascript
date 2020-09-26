const map = new Map(
  [ ['a', 1] ]
);


console.log(map.get());
map.set('b', 42).set(NaN, 'Number');

console.log(map);

// map.clear();

console.log(map.has(42)); // true
console.log(map.size); // 3
map.delete('b');

// Set
const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8]);

set.add(21);
set.delete(1);

console.log(set); // Set { 2, 3, 5, 8, 13, 21 } удаляет дубликатЬІ
