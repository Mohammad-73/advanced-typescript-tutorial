// let s = 10;

// const course = {
//   title: "Websocket",
//   subTitle: "lorem ipsum",
//   students: 8,
// };

// const concat = (letters: string[]) => letters.join("");
// const result = concat(["A", "B", "C"]);
// console.log(result);

// const pi = 3.14159;
// console.log(pi);

// ------------

// interface Course {
//   id: string;
//   title: string;
// }

// const logCourse = (course: Course) => {
//   const { id, title } = course;
//   console.log(`Course ID: ${id}, Title: ${title}`);
// };

// logCourse({
//   id: "12",
//   title: "Websocket",
// });

// const webSocket = {
//   id: 50,
//   title: "Websocket",
// };

// logCourse(webSocket);

// --------------

// const cache: { [userId: number]: string } = {};

// const getUsername = (userId: number): Promise<string> => {
//   if (userId in cache) {
//     return Promise.resolve(cache[userId]);
//   }

//   return fetch(
//     `https://general-api.classbon.com/api/general/get-username/${userId}`,
//   )
//     .then((response) => response.text())
//     .then((username) => {
//       cache[userId] = username;
//       return username;
//     });
// };

// getUsername(5).then;

// ------------------

// interface Point {
//   x: number;
//   y: number;
// }

// const addPoint = (a: Point, b: Point): Point => {
//   return { x: a.x + b.x, y: a.y + b.y };
// };
