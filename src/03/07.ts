// function stringToArray(str: string): string[] {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i]);
//   }

//   return result;
// }

// ----------------

// const numbers = [];
// numbers.push("1");
// console.log(numbers);
// numbers.push(1);
// console.log(numbers);

// ----------------

// interface Course {
//   title: string;
//   category: string;
//   instructor: string;
//   duration: string;
// }

// async function fetchCourse(url: string) {
//   let result;
//   const response = await fetch(url);
//   if (!response.ok) {
//     result = `Error: ${response.status} ${response.statusText}`;
//     console.log(result);
//   }

//   result = (await response.json()) as Course;
//   console.log(result);
// }

// fetchCourse("https://general-api.classbon.com/api/general/get-course");

// ----------------

// function makeSquares() {
//   const nums = [];
//   //   [1, 2, 3].forEach((i) => {
//   //     nums.push(i * i);
//   //   });
//   for (const num of [1, 2, 3]) {
//     nums.push(num * num);
//   }
//   return nums;
// }
