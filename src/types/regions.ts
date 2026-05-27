// types/region.ts

export interface RegionListItem {
  name: string // e.g. "kanto", "johto", "hoenn"
  url: string // e.g. "https://pokeapi.co/api/v2/region/1/"
}

export interface RegionListResponse {
  count: number
  next: string | null
  previous: string | null
  results: RegionListItem[]
}

export interface RegionDetail {
  id: number
  name: string
  locations: RegionListItem[] // locations within this region
  main_generation: {
    name: string // e.g. "generation-i"
    url: string
  }
  names: {
    name: string // localized name
    language: { name: string; url: string }
  }[]
  pokedexes: { name: string; url: string }[]
  version_groups: { name: string; url: string }[]
}
