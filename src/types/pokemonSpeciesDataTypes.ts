// Types for /pokemon-species/id endpoint
export interface NamedAPIResource {
    name: string;
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
}

export interface Genus {
    genus: string;
    language: NamedAPIResource;
}

export interface Name {
    name: string;
    language: NamedAPIResource;
}

export interface EggGroup extends NamedAPIResource { }

export interface PalParkEncounter {
    area: NamedAPIResource;
    base_score: number;
    rate: number;
}

export interface PokedexNumber {
    entry_number: number;
    pokedex: NamedAPIResource;
}

export interface Variety {
    is_default: boolean;
    pokemon: NamedAPIResource;
}

export interface PokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedAPIResource;
    egg_groups: EggGroup[];
    color: NamedAPIResource;
    shape: NamedAPIResource;
    evolves_from_species: NamedAPIResource | null;
    evolution_chain: { url: string };
    habitat: NamedAPIResource | null;
    generation: NamedAPIResource;
    names: Name[];
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: string[];
    genera: Genus[];
    varieties: Variety[];
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumber[];
}