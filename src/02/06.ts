// function calculateAverage(numbers: readonly number[]): number {
//   let sum = 0;
//   //   while (numbers.length > 0) {
//   //     sum += numbers.pop()!;
//   //   }
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum / numbers.length;
// }

// const numbers = [10, 20, 30, 40] as readonly number[];
// console.log(calculateAverage(numbers));
// console.log(numbers);

// -------------

// let str = "Hello";
// const result = str.toLowerCase();
// console.log(str);
// console.log(result);

// -------------

// interface Course {
//   title: string;
//   instructor: string;
// }

// type ImmutableCourse = Readonly<Course>;

// const javascript: ImmutableCourse = {
//   title: "Javascript",
//   instructor: "Ali",
// };

// javascript.title = "next.js";

// -------------

// interface User {
//   readonly id: number;
//   readonly name: string;
//   readonly address: {
//     city: string;
//     street: string;
//   };
//   updateStreet(street: string): void;
// }

// const user: User = {
//   id: 1,
//   name: "Alice",
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
//   updateStreet(street: string) {
//     this.address.street = street;
//   },
// };

// user.id = 10;
// user.address.city = "Tehran";
// user.updateStreet("Vali'asr");

// -------------

// const a: readonly number[] = [1, 2, 3, 4, 5];
// a[1] = 50;
// console.log(a);

// -------------

// const a: number[] = [1, 2, 3];
// const b: readonly number[] = a;
// const c: number[] = b;

// -------------

// function modifyArray(arr: readonly number[]) {
//   arr.push(1);
// }
