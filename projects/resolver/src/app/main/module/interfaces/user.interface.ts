export interface UserInterface {
  id?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  gender: string;
  ip_address: string;
  role?: string;
  username?: string;
  password?: string;
  token?: string;
  authorities?: string[];
}
