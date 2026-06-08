// let course = "typescript";
// course = 10;

// -----------------

const setCourseAccess = (isOpen: boolean) => {
  switch (isOpen) {
    case true:
      console.log("Course is open to all students.");
      break;
    case false:
      console.log("Course is closed to students.");
      break;
    default:
      console.log("Invalid access setting.");
  }
};

interface CourseAPIResponse {
  isOpen: boolean;
}

async function UpdateCourseAccess() {
  const response = await fetch("/api/course/typescript/access");
  const result: CourseAPIResponse = await response.json();
  setCourseAccess(result.isOpen);
}
