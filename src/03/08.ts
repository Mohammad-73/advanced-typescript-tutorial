// interface User {
//   id: number;
//   username: string;
//   email: string;
//   role: "student" | "instructor" | "admin";
// }

// interface Course {
//   id: number;
//   title: string;
//   description: string;
//   instructorId: number;
//   enrolledStudents: number;
// }

// interface Enrollment {
//   userId: number;
//   courseId: number;
//   enrollmentDate: string;
// }

// interface ClassbonAPI {
//   "/users": User[]; // Get all users
//   "/users/:id": User; // Get a user
//   "/course": Course[]; // Get all course
//   "/course/:id": Course; // Get a course by ID
//   "/enroll": Enrollment; // Enroll a user in a course
// }

// declare function fetchAPI<API, Path extends keyof API>(
//   path: string,
// ): Promise<API[Path]>;

// const users = fetchAPI<ClassbonAPI>("/users");
// const users = fetchAPI<ClassbonAPI, "/users">("/users");

// First Method
// declare class APIFetcher<API> {
//   fetch<Path extends keyof API>(path: Path): Promise<API[Path]>;
// }

// const fetcher = new APIFetcher<ClassbonAPI>();
// const users = fetcher.fetch("/users");

// Programming Note
// declare function calculateArea(length:number, width:number):number;
// const area=calculateArea(5,10)

// declare function calculateArea(length: number): (width: number) => number;
// const area = calculateArea(5)(10);

// Second Method
// declare function fetchAPI<API>(): <Path extends keyof API>(
//   path: Path,
// ) => Promise<API[Path]>;

// const users = fetchAPI<ClassbonAPI>()("/users");

// const classbonAPI = fetchAPI<ClassbonAPI>();
// const users2 = classbonAPI("/users");

// function fetchAPI<API>() {
//   type Routes = keyof API & string;
//   return <Path extends Routes>(path: Path): Promise<API[Path]> =>
//     fetch(path).then((r) => r.json());
// }
