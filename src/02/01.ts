//  We should use Type annotation instead of Type assertion.
// interface Course {
//   title: string;
//   duration?: number;
// }

// const typescript: Course = {
//   title: "TS Basics",
//   duration: 30,
// };

// const websocket = {
//   title: "Websocket Basics",
//   duration: 30,
// } as Course;

// const react: Course = {
//   title: "React Basics",
//   category: "Frontend",
// };

// const css = { title: "CSS", category: "" } as Course;

// const courses = ["typescript", "react", "next"].map((title) => {
//   const course: Course = { title };
//   return course;
// }); // a little noisy code

// const courses: Course[] = ["typescript", "react", "next"].map((title) => ({
//   title,
// }));

// -----------

// document.querySelector("#btnSubmit")?.addEventListener("click", (e) => {
//   const btnSubmit = e.currentTarget as HTMLButtonElement;
// });

// const btn = document.getElementById("btnSubmit")!;

// interface Course {
//   id: number;
//   title: string;
// }

// const el = btn as unknown as Course;
