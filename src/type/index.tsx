export interface Pokemon {
  id: number,
  name: string,
  image: string,
  sprite: string,
  slug: string,
  stats: Array<number>,
  apiTypes: Array<{
    name: string,
    image: string,
  }>,
  apiGeneration: number,
  apiResistances: {
    damage_relation: string,
    damage_multiplier: number
  },
}
