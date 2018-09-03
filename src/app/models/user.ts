export interface User {
  _id?: {$oid: string};
  name: string;
  password: string;
  end?: string;
  isDone?: boolean;
  }
