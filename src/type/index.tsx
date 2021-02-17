export interface Pokemon {
  id: number,
  name: string,
  image: string,
  sprite: string,
  stats: Array<number>,
  apiTypes: Array<any>,
  apiGeneration: number,
}
