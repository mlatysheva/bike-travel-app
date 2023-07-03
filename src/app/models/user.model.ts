export interface IUser {
  username?: string;
  user_location?: {
    id?: string;
  };
  avatar?: {
    thumbnail?: string,
    small?: string,
    medium?: string,
    large?: string,
    original?: string,
  }
}
