// interface INotification {
//   type: "text" | "icon" | "action";
//   message: string;
//   iconUrl?: string;
//   actionText?: string;
//   onClick?: () => void;
// }

// const invalidNotification: INotification = {
//   type: "text",
//   message: "The operation is invalid",
//   iconUrl: "https://github.com/image.png",
// };

// interface TextNotification {
//   type: "text";
//   message: string;
// }

// interface IconNotification {
//   type: "icon";
//   message: string;
//   iconUrl:string;
// }

// interface ActionNotification {
//   type: "action";
//   message: string;
//   actionText: string;
//   onClick: () => void;
// }

// type TNotification = TextNotification | IconNotification | ActionNotification;

// function showNotification(notification: TNotification) {
//   switch (notification.type) {
//     case "text":
//       console.log(`Text Notification: ${notification.message}`);
//       break;

//     case "icon":
//       console.log(`Image Notification: ${notification.message}`);
//       console.log(`Image URL: ${notification.iconUrl}`);
//       break;

//     case "action":
//       console.log(`Action Notification: ${notification.message}`);
//       console.log(`Button Text: ${notification.actionText}`);
//       break;

//     default:
//       throw new Error("Unknown notification type");
//   }
// }

// Second Method
// type NotificationType = "text" | "icon" | "action";

// interface BaseNotification {
//   type: NotificationType;
//   message: string;
// }
// interface TextNotification extends BaseNotification {}

// interface IconNotification extends BaseNotification {
//   iconUrl: string;
// }

// interface ActionNotification extends BaseNotification {
//   actionText: string;
//   onClick: () => void;
// }

// interface User {
//   id: number;
//   name: string;
//   subscription?: {
//     isSubscribed: boolean;
//     expirationDate: Date;
//   };
// }

// const ali: User = {
//   id: 1,
//   name: "ali",
//   subscription: {
//     isSubscribed: true,
//     expirationDate: new Date(),
//   },
// };

// function logUser(user: User) {
//   const { subscription } = user;
//   if (subscription) {
//     console.log(subscription?.expirationDate);
//   }
// }
