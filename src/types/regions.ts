export interface RegionListItem {
  name: string
  url: string
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
  locations: RegionListItem[]
  main_generation: {
    name: string
    url: string
  }
  names: {
    name: string
    language: { name: string; url: string }
  }[]
  pokedexes: { name: string; url: string }[]
  version_groups: { name: string; url: string }[]
}

export interface RegionProfile {
  id: number
  slug: string
  name: string
  tagline: string
  description: string
  generation: string
  inspiration: string
  professor: string
  starters: string[]
  legendary: string[]
  cities: string[]
  pokemonCount: number
  notableFeatures: string[]
  timeline: string[]
  badges: string[]
  image: string
  banner: string
  colorTheme: {
    primary: string
    secondary: string
    glow: string
  }
}
