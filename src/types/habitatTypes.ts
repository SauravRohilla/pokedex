import type { NamedAPIResource } from "./evolutionTypes";

interface HabitatName {
    name: string;
    language: NamedAPIResource;
}

export interface PokemonHabitat {
    id: number;
    name: string;
    names: HabitatName[];
    pokemon_species: NamedAPIResource[];
}