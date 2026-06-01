// types/pokemon.ts

// ─── List Endpoint ──────────────────────────────────────────────
// Matches: GET /api/v2/pokemon?limit=100000

export interface PokemonListItem {
  name: string // e.g. "bulbasaur", "charizard-gmax", "meowth-galar"
  url: string // e.g. "https://pokeapi.co/api/v2/pokemon/1/"
}

export interface PokemonListResponse {
  count: number // Total Pokémon count (1350 in your file)
  next: string | null // URL to next page, or null if none
  previous: string | null // URL to previous page, or null if none
  results: PokemonListItem[] // The actual list
}
