// This way is good for huge Data, External Data and APIs
// interface Course {
//   title: string;
//   duration?: number;
//   [otherProps: string]: unknown;
// }

// const typescript = {
//   title: "Typescript",
//   duration: 2,
//   description: "Lorem",
// };

// const typescriptCourse: Course = typescript;

// const getCourseDurationInMinutes = (course: Course) => {
//   if (course.duration) {
//     return course.duration * 60;
//   }
// };

// getCourseDurationInMinutes({
//   title: "Typescript",
//   Duration: 20,
// });

// const javascript = { title: "Javascript", Duration: 60 } as Course;
// const javascript: Course = { title: "Javascript", Duration: 60 };

// Weak type

// interface UserPreferences {
//   theme?: string;
//   notificationEnabled?: boolean;
// }

// const preferences: UserPreferences = {};

// const prefs: UserPreferences = {
//   colorScheme: "dark",
// };
