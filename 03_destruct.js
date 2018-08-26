let arr = [1, 2, 3];

console.log(arr);
console.log(...arr);


// function foo(...args) {
//     console.log(args);
// }
// foo(1, 2, 3, 4, 5);



// function foo() {
//     return [1, 2, 3];
// }
// let arr = foo(); // [1,2,3]

// let [a, b, c] = foo();
// console.log(a, b, c); // 1 2 3

// function bar() {
//     return {
//         x: 4,
//         y: 5,
//         z: 6
//     };
// }
// let { x: a, y: b, z: c } = bar();
// console.log(a, b, c)


// const obj = {
//     a: 5,
//     b: {
//         c: 4,
//         d: 0
//     }
// }

// let { b: { c: number } } = obj;
// console.log(number);