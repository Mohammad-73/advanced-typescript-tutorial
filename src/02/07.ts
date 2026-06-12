// const setting = {
//   isDark: false,
//   maxUsers: 100,
// };

// type AppSetting = { [property: string | number | symbol]: boolean | number }; // Index signature
// const appSetting: AppSetting = {
//   isDark: false,
//   isdark: true,
//   maxUsers: 100,
//   0: false,
// };

// const settingTwo: AppSetting = {};

// interface AppSetting{
//     isDark:boolean;
//     maxUsers:number;
// }

// const appSetting:AppSetting={
//     isDark:false,
//     maxUsers:100,
// }

// Index signature is good for dynamic data like forms.

// ----------

// CSV Format
// userId,name,email
// 1,Ali Hosseini,ali@example.com
// 2,Sara Ahmadi,sara@example.com
// 3,Babak Mohammadi,babak@example.com

// [
// { userId: "1", name: "Ali Hosseini", email: "ali@example.com"},
// { userId: "2", name: "Sara Ahmadi", email: "sara@example.com"},
// { userId: "3", name: "Babak Mohammadi", email: "babak@example.com"},
// ]

// function parseUserCSV(input: string): {[key:string]:string}[]{
//     const lines = input.trim().split("\n");
//     const [headerLine, ...rows]= lines;
//     const headers = headerLine.split(",");

//     return rows.map(rowStr => {
//         const user:{[key:string]: string} = {};
//         rowStr.split(",").forEach((cell, i)=>{
//             user[headers[i]] = cell,
//         });
//         return user;
//     })
// }

// -----------

// interface Button {
//   caption: string;
//   onClick: () => void;
//   [props: string]: unknown;
// }

// const submit: Button = {
//   caption: "Submit",
//   onClick: () => console.log(""),
//   isDisabled: false,
//   theme: "dark",
// };
