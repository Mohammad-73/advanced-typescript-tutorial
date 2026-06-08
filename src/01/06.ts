// let courseEnrollment: number;
// courseEnrollment = "12" as any;

// courseEnrollment += 1;
// console.log(courseEnrollment);

// // -------------

// const getUserName = (userId: number): string => {
//   // ...
//   return "";
// };

// let userId: any = "USER1400";
// getUserName(userId);

interface Course {
  title: string;
  category: string;
}

const getCourse = (p: Course) => `${p.title} ${p.category}`;
const getCourseWithAny = (p: any) => `${p.name} ${p.category}`;
