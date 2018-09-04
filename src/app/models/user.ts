export interface User {
  _id?: {$oid: string};
  login: string;
  password?: string;
  end?: string;
  isDone?: boolean;
  }
