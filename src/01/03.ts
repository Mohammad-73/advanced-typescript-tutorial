<<<<<<< HEAD
const multiply = (a: number, b: number) => a * b;

// ----------------

// const getLength = (str: string) => str.length;

const getLength = (str: string | undefined) => {
  if (str === undefined) {
    return 0;
  }
  return str.length;
}; // TS Friendly

console.log(getLength(undefined));

// ----------------

const enrolledCoursed = ["typescript", "websocket", "next.js"];

// console.log(enrolledCoursed[3].toLowerCase());
=======
// const multiply = (a: number, b: number) => a * b;

// // ----------------

// // const getLength = (str: string) => str.length;

// const getLength = (str: string | undefined) => {
//   if (str === undefined) {
//     return 0;
//   }
//   return str.length;
// }; // TS Friendly

// console.log(getLength(undefined));

// // ----------------

// const enrolledCoursed = ["typescript", "websocket", "next.js"];

// // console.log(enrolledCoursed[3].toLowerCase());
>>>>>>> cf8464cbfabdb29389f21396b270ffbe7e16a4f1
