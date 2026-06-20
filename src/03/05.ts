// const progressElement = document.querySelector(".progress");
// if (progressElement) {
//   progressElement.classList.add("progress-bar");
// } else {
//   progressElement;
//   console.log("progress element not found");
// }

// --------

// const formatDate = (value:string |Date):string=>{
//     if(value instanceof Date){
//         return value.toISOString();
//     }

//     const parsedDate = new Date(value);
//     return parsedDate.toISOString()
// }

// console.log(formatDate(new Date()));
// console.log(formatDate("2024-10-12"));

// ------------

// interface TextInput {
//   content: string;
//   isRichText: boolean;
// }

// interface FileInput {
//   fileName: string;
//   fileSize: number;
// }

// function handleInput(input: TextInput | FileInput) {
//   if ("content" in input) {
//     console.log(`${input.content}`);
//   } else {
//     input;
//   }
// }

// ------------

// const filterByCategory = (categoryList: string | string[]) => {
//   const categories = Array.isArray(categoryList)
//     ? categoryList
//     : [categoryList];
// };

// ------------

// interface SuccessNotification {
//   type: "success";
//   message: string;
// }

// interface ErrorNotification {
//   type: "error";
//   message: string;
//   errorCode: number;
// }

// interface InfoNotification {
//   type: "info";
//   message: string;
// }

// type NotificationType =
//   | SuccessNotification
//   | ErrorNotification
//   | InfoNotification;

// function handleNotification(notification: NotificationType) {
//   switch (notification.type) {
//     case "success":
//       console.log("Success:" + notification.message);
//       break;
//     case "error":
//       console.log("Success:" + notification.message);
//       break;
//     case "info":
//       console.log("Success:" + notification.message);
//       break;
//     default:
//       console.log("Something went wrong!");
//   }
// }
