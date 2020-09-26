const array = [1, 2, 3, 4];
const str = 'Hello';

// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

const iter = array[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }

for (let item of array) {
  console.log(item);
}

// const counrtry = {
//   values: ['ru', 'kz', 'ua', 'by'],
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         const value = this.value[i];
//         i++;
//         return {
//           done: i> this.values.length,
//           value
//         };
//       }
//     };
//   }
// };

// for (let item of counrtry) {
//   console.log(item);
// }

// Geneator
function *gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}

const iterq = gen(3);

console.log(iterq.next());
console.log(iterq.throw('My error'));
console.log(iterq.next());
console.log(iterq.next());

// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: undefined, done: true }

for (let i of gen(4)) {
  console.log(i);
}

// 0
// 1
// 2
// 3
