// interface Course {
//   title: string;
//   status: "published" | "draft" | "archived";
// }

// function getCoursesByStatus(status: "published" | "draft" | "archived") {
//   // fetch courses here by status logic
// }

// // let courseStatus = "published";
// const courseStatus = "published";
// getCoursesByStatus(courseStatus);

// const course = {
//   title: "Javascript",
//   status: "published" as const,
// };

// course.status = "sssss";

// ------------

// const importanceLevel = [1, 2, 3] as const;
// importanceLevel[0] = 10;

// const locationT = [5.22, 6.65] as const;
// locationT[2] = 41;

// ------------

// const course = {
//   title: "Next.js and React Real-time System",
//   duration: 30,
//   students: [{ name: "John", id: 1, address: { city: "Tehran" } }],
// } as const;

// course.students[0].address.city = "Shiraz";

// ------------

// type Point = [number, number];

// const tehran = {
//   location: [-73.75, 42.65],
// } satisfies Record<string, Point>;

// tehran.location[0] = 10;

// const karaj: Record<string, Point> = {
//   location: [73, 74],
// };

// karaj.location2 = [47, 51];
