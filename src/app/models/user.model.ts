export interface User {
  id: string;
  name: string | ReturnType<typeof prompt>;
  favShows?: object;
  url: string;
}
