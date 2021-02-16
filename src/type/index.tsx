export interface Pokemon {
  id: number,
  name: string,
  image: string,
  sprite: string,
  stats: Array<number>,
  apiTypes: Array<any>,
  apiGeneration: number,
}

export interface DrawerProps {
  pokemon: Array<Pokemon>,
  toggleDrawer: Function,
  isDrawer: boolean,
}

export interface AppProps {
  isDetails: boolean,
}

export interface PokemonListProps {
  name: string,
  image: string,
  id: number,
  apiTypes: Array<any>,
  toggleDetails: Function,
  state: any,
  pokemonDetails: Function,
}

export interface PokestatProps {
  toggleDetails: Function,
  pokemon: Pokemon,
}

export interface HomeProps {
  isDetails: boolean,
}

export interface ApiTypes {
  name: string,
  image: string,
}
