// type StringTransform = (input: string) => string;

// const capitalizeWord: StringTransform = (input) => {
//   return input.replace(/\b\w/g, (char) => char.toUpperCase());
// };

// // Reverses the entire string
// const reverseString: StringTransform = (input) => {
//   return input.split("").reverse().join("");
// };

// // Replaces all spaces with hyphens
// const replaceSpacesWithHyphens: StringTransform = (input) => {
//   return input.replace(/\s+/g, "-");
// };

// // Remove all non-alphanumeric characters
// const removeSpecialCharacters: StringTransform = (input) => {
//   return input.replace(/[^a-zA-Z0-9\s]/g, "");
// };

// -----------

// async function getCourse() {
//   const response = await fetch(
//     "https://general-api.classbon.com/api/general/get-course",
//   );
//   const course = await response.json();
//   return course;
// }

// getCourse().then((course) => console.log(course));

// const checkedFetch: typeof fetch = async (input, init) => {
//   const response = await fetch(input, init);
//   if (!response.ok) {
//     throw new Error(`Request failed: ${response.status}`);
//   }

//   return response;
// };

// -----------

// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(1, 2));

// function concat(...args: Parameters<typeof add>): string {
//   const [a, b] = args;
//   return a.toString() + b.toString();
// }

// console.log(concat(1, 2));
