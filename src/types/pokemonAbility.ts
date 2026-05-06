// Reusable base types
export interface LanguageRef {
    name: string;
    url: string;
}

export interface VersionGroupRef {
    name: string;
    url: string;
}

export interface GenerationRef {
    name: string;
    url: string;
}

export interface PokemonRef {
    name: string;
    url: string;
}

// effect_changes array (empty in your data but can have entries)
export interface AbilityEffectChange {
    effect_entries: {
        effect: string;
        language: LanguageRef;
    }[];
    version_group: VersionGroupRef;
}

// effect_entries array
export interface AbilityEffectEntry {
    effect: string;
    short_effect: string;
    language: LanguageRef;
}

// flavor_text_entries array
export interface AbilityFlavorTextEntry {
    flavor_text: string;
    language: LanguageRef;
    version_group: VersionGroupRef;
}

// names array
export interface AbilityName {
    name: string;
    language: LanguageRef;
}

// pokemon array
export interface AbilityPokemon {
    is_hidden: boolean;
    slot: number;
    pokemon: PokemonRef;
}

// Full Ability response type
export interface AbilityData {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: GenerationRef;
    effect_changes: AbilityEffectChange[];
    effect_entries: AbilityEffectEntry[];
    flavor_text_entries: AbilityFlavorTextEntry[];
    names: AbilityName[];
    pokemon: AbilityPokemon[];
}