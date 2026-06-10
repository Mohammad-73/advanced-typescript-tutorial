// type TCourse = {
//   id: number;
//   title: string;
// };

// interface ICourse {
//   id: number;
//   title: string;
// }

// const typescript: ICourse = {
//   id: 1,
//   title: "TS",
//   duration: 1000,
// };

// type TLMSSetting = {
//   [key: string]: string | number | boolean;
// };

// interface ILMSSetting {
//   [key: string]: string | number | boolean;
// }

// const settings: ILMSSetting = {
//   isDark: true,
//   sessions: 10,
// };

// It's better to use type for functions
// type TStringTransform = (input: string) => string;
// type T2StringTransform = {
//   (input: string): string;
// };
// interface IStringTransform {
//   (input: string): string;
// }

// const fn1: TStringTransform = (str) => str.toLowerCase();
// const fn2: T2StringTransform = (str) => str.toLowerCase();
// const fn3: IStringTransform = (str) => str.toLowerCase();

// type TFetchResponse<T> = {
//   data: T;
//   status: number;
//   error?: string;
// };

// interface IFetchResponse<T> {
//   data: T;
//   status: number;
//   error?: string;
// }

// type TComponentBase = {
//   id: string;
//   width: number;
//   height: number;
// };

// interface IComponentBase {
//   id: string;
//   width: number;
//   height: number;
// }

// interface IButton extends TComponentBase {
//   label: string;
//   onClick: () => void;
// }

// type TButton = IComponentBase & {
//   label: string;
//   onClick: () => void;
// };

// class Button implements TButton {
//   id: string;
//   width: number;
//   height: number;
//   label: string;
//   onClick: () => void;
// }

// ---------------

// type Course = {
//   title: string;
//   duration: number;
// };

// type Quiz = {
//   question: number;
// };

// type TContent = Course | Quiz;

// type ContentWithMetadata = TContent & {
//   createdBy: string;
//   createdAt: Date;
// };

// const typescript: ContentWithMetadata = {
//   title: "typescript",
//   duration: 120,
//   createdAt: new Date(),
//   createdBy: "Ali",
// };

// interface IContentWithMetadata extends TContent {
//   createdBy: string;
//   createdAt: Date;
// }

// -----------------

// interface User {
//   id: number;
//   name: string;
// }

// type TAdminUser = User & {
//   isSuperAdmin: boolean;
//   id: string;
// };

// interface IAdminUser extends User {
//   isSuperAdmin: boolean;
//   id: string;
// }

// const adminUser: TAdminUser = {
//   id: 12,
//   name: "Ali",
//   isSuperAdmin: true,
// };

// -----------------

// type TCoordinate = [number, number];

// const tehran: TCoordinate = [15, 45];

// interface ICordinate {
//   0: number;
//   1: number;
//   length: 2;
// }

// const point: ICoordinate = [10, 20, 3, 45];

// -----------------

// type TCourseIdList = string[];
// interface ICourseIdList extends Array<string>{}

// -----------------

// type TLocation = [number, number];
// type TLocation2 = [latitude: number, longitude: number];

// const userId: number[] = [1, 2];

// -----------------

// interface ICourse {
//   id: number;
//   title: string;
// }

// interface ICourse {
//   instructor: string;
// }

// const typescript: ICourse = {
//   id: 1,
//   title: "typescript",
//   instructor: "Ali",
// };

// type TCourse {
//   id: number;
//   title: string;
// }

// type TCourse {
//   instructor: string;
// }
