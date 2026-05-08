// types/evolutionChain.ts

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface EvolutionDetail {
  base_form: NamedAPIResource | null;
  gender: number | null;
  held_item: NamedAPIResource | null;
  item: NamedAPIResource | null;
  known_move: NamedAPIResource | null;
  known_move_type: NamedAPIResource | null;
  location: NamedAPIResource | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_damage_taken: number | null;
  min_happiness: number | null;
  min_level: number | null;
  min_move_count: number | null;
  min_steps: number | null;
  needs_multiplayer: boolean;
  needs_overworld_rain: boolean;
  party_species: NamedAPIResource | null;
  party_type: NamedAPIResource | null;
  region: NamedAPIResource | null;
  relative_physical_stats: number | null;
  time_of_day: string;
  trade_species: NamedAPIResource | null;
  trigger: NamedAPIResource;
  turn_upside_down: boolean;
  used_move: NamedAPIResource | null;
}

export interface FlatEvolution {
  name: string;
  minLevel: number | null;
  trigger: string;
  url: string,
  isLast: boolean,
  isFirst: boolean
}


// Recursive — a chain link can evolve into more chain links
export interface ChainLink {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[]; // 👈 recursive type
  isLast: boolean,
  isFirst: boolean
}

export interface EvolutionChain {
  id: number;
  baby_trigger_item: NamedAPIResource | null;
  chain: ChainLink;
}