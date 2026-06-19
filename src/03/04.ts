// const message = {
//   title: "Hello",
//   priority: 1,
//   tags: ["urgent", "admin"],
// } as const;

// type Message = { title: string; priority: number };

// const message2 = {
//   title: "Hello",
//   priority: 1,
// } satisfies Message;

// -----------

// const config1 = {
//   mode: "production",
//   retries: 3,
//   paths: ["/", "/login"],
// } as const;

// type Config = { mode: string; retries: number; paths: string[] };

// const config2 = {
//   mode: "production",
//   retries: 3,
//   paths: ["/", "/login"],
// } satisfies Config;

// config2.mode = "development";

// -----------

// type Point = [number, number];

// const location2 = {
//   city1: [40.7128, -74.006],
//   city2: [34.0522, -118.2437],
// } satisfies Record<string, Point>;

// -----------

// const appConfig = {
//   theme: "dark",
//   maxUsers: 100,
//   features: {
//     notifications: true,
//     chat: false,
//     analytics: true,
//   },
//   supportedLanguages: ["en", "fr", "es"],
// } as const;

// type UserSettings = {
//   username: string;
//   email: string;
//   isDarkMode: boolean;
//   code: number;
//   preferredLanguages: string[];
//   notifications: {
//     email: boolean;
//     sms: boolean;
//     push: boolean;
//   };
// };

// // for booleans use "as boolean" or define variable type directly "userSettings:UserSettings"
// const userSettings = {
//   username: "john_doe",
//   email: "john.doe@example.com",
//   isDarkMode: true as boolean,
//   code: 1245342,
//   preferredLanguages: ["en", "fr"],
//   notifications: {
//     email: true,
//     sms: false,
//     push: true,
//   },
// } satisfies UserSettings;

// userSettings.email = "jd@example.com";
// userSettings.isDarkMode = false;

// // -----------

// // -----------
