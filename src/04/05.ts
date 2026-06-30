/** There are only two states for the type */
// type Status = "recording" | "completed";
// interface Course {
//   title: string;
//   description: string;
//   releaseDate: Date; // YYYY/MM/DD
//   status: "recording" | "completed";
// }

// // const typescript: Course = {
// //   title: "TypeScript for Beginners",
// //   description: "Learn the basics of Typescript, including its features,",
// //   releaseDate: "2022-01-01",
// //   status: "completed",
// // };

// // declare function getCourseByStatus(status: string): Course[];
// // getCourseByStatus("pre-enrollment");

// // function extract<T, K extends keyof T>(list: T[], key: K): T[K][] {
// //   return list.map((r) => r[key]);
// // }

// const courses: Course[] = [
//   {
//     title: "TypeScript",
//     description: "Learn Typescript",
//     releaseDate: new Date("2024/01/01"),
//     status: "completed",
//   },
//   {
//     title: "React",
//     description: "Learn React",
//     releaseDate: new Date("2024/01/01"),
//     status: "completed",
//   },
//   {
//     title: "Node.js",
//     description: "Learn Node.js",
//     releaseDate: new Date("2024/01/01"),
//     status: "recording",
//   },
// ];

// function extract<T, K extends keyof T>(list: T[], key: K): T[K][] {
//   return list.map((p) => p[key]);
// }

// console.log(extract(courses, "title"));

// type TStatus = Course["releaseDate"];

// type TCourse = Course[keyof Course];

// const releaseDates = extract(courses, "title");

// const dates = extract(courses, "releaseDate");
// console.log(dates);

// const titles = extract(courses, "title");
// console.log(titles);

// const states = extract(courses, "status");
// console.log(states);

// const invalidState = extract(courses, "pre-enrollment");
