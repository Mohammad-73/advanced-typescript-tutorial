// interface Course {
//   title: string;
//   category: string;
//   instructor: string;
//   duration: string;
// }

// // interface CourseState {
// //   course?: Course;
// //   isLoading: boolean;
// //   error?: string;
// // }

// interface RequestLoading {
//   state: "loading";
// }

// interface RequestSuccess {
//   state: "success";
//   course: Course;
// }

// interface RequestError {
//   state: "error";
//   error: string;
// }

// type RequestState = RequestLoading | RequestError | RequestSuccess;

// const fetchCourse = async (): Promise<RequestState> => {
//   let state: RequestState = { state: "loading" };

//   try {
//     const response = await fetch(
//       "https://general-api.classbon.com/api/general/get-course",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const course = await response.json();
//     return { state: "success", course: course };
//   } catch (error) {
//     return { state: "error", error: "" + error };
//   }
// };
