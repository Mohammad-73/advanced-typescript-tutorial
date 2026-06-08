// interface Card {
//   title: string;
//   description: string;
//   render: () => string;
// }

// const Card = (title: string, description: string) => ({
//   title,
//   description,
//   render: () =>
//     `<div class="card"><h1>${title}</h1><p>${description}</p></div>`,
// });

// const renderUIComponent = (component: unknown) => {
//   if (component instanceof Card) {
//     component.render();
//   }
// };

// --------

// type AdminRole = "admin";
// const adminRole = "admin";

// --------

// interface Course {}

// const typescript: Course = {};
// type T1 = typeof typescript;
// const runtimeType = typeof typescript;

// console.log(runtimeType);
