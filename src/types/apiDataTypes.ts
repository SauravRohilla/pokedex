// This is for /pokemon/id endpoint
export interface PokemonAbility {
    name: string;
    url: string;
}

export interface PokemonAbilities {
    ability: PokemonAbility;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonForms {
    name: string;
    url: string;
}

export interface GameIndices {
    game_index: number;
    version: PokemonForms;
}

export interface PokemonMoves {
    move: PokemonForms;
}
// ── Reusable base sprite shapes ──────────────────────────────────────────────

export interface FrontDefaultSprite {
    front_default: string | null;
    front_female: string | null;
}

export interface FrontSprites extends FrontDefaultSprite {
    front_shiny: string | null;
    front_shiny_female: string | null;
}

export interface FullSprites extends FrontSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

// ── Generation-specific sprite shapes ────────────────────────────────────────

// Gen I — no shiny, has gray + transparent variants
export interface GenIVersionSprite {
    back_default: string | null;
    back_gray: string | null;
    back_transparent: string | null;
    front_default: string | null;
    front_gray: string | null;
    front_transparent: string | null;
}

// Gen II — has shiny + transparent variants
export interface GenIIGoldSprite {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_transparent: string | null;
}

export interface GenIICrystalSprite {
    back_default: string | null;
    back_shiny: string | null;
    back_shiny_transparent: string | null;
    back_transparent: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_shiny_transparent: string | null;
    front_transparent: string | null;
}

export interface GenIISilverSprite {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_transparent: string | null;
}

// Gen III — Emerald only has front
export interface GenIIIEmeraldSprite {
    front_default: string | null;
    front_shiny: string | null;
}

export interface GenIIIFullSprite {
    back_default: string | null;
    back_shiny: string | null;
    front_default: string | null;
    front_shiny: string | null;
}

// Gen V — has animated sub-object
export interface GenVBlackWhiteSprite extends FullSprites {
    animated: FullSprites;
}

// Gen VI — only front sprites
export interface GenVISprite extends FrontSprites { }

// Gen VII — ultra-sun-ultra-moon has shiny; icons only front_default + front_female
export interface GenVIIIconSprite extends FrontDefaultSprite { }

export interface GenVIIUltraSunMoonSprite extends FrontSprites { }

// Gen VIII — only front_default + front_female
export interface GenVIIIIconSprite extends FrontDefaultSprite { }

export interface GenVIIIBDSPSprite extends FrontDefaultSprite { }

// Gen IX — only front_default + front_female
export interface GenIXScarletVioletSprite extends FrontDefaultSprite { }

// ── versions object ───────────────────────────────────────────────────────────

export interface PokemonSpriteVersions {
    "generation-i": {
        "red-blue": GenIVersionSprite;
        yellow: GenIVersionSprite;
    };
    "generation-ii": {
        crystal: GenIICrystalSprite;
        gold: GenIIGoldSprite;
        silver: GenIISilverSprite;
    };
    "generation-iii": {
        emerald: GenIIIEmeraldSprite;
        "firered-leafgreen": GenIIIFullSprite;
        "ruby-sapphire": GenIIIFullSprite;
    };
    "generation-iv": {
        "diamond-pearl": FullSprites;
        "heartgold-soulsilver": FullSprites;
        platinum: FullSprites;
    };
    "generation-v": {
        "black-white": GenVBlackWhiteSprite;
    };
    "generation-vi": {
        "omegaruby-alphasapphire": GenVISprite;
        "x-y": GenVISprite;
    };
    "generation-vii": {
        icons: GenVIIIconSprite;
        "ultra-sun-ultra-moon": GenVIIUltraSunMoonSprite;
    };
    "generation-viii": {
        "brilliant-diamond-shining-pearl": GenVIIIBDSPSprite;
        icons: GenVIIIIconSprite;
    };
    "generation-ix": {
        "scarlet-violet": GenIXScarletVioletSprite;
    };
}

// ── other object ─────────────────────────────────────────────────────────────

export interface PokemonSpritesOther {
    dream_world: FrontDefaultSprite;
    home: {
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
    };
    showdown: FullSprites;
}

// ── Root Sprites export interface ────────────────────────────────────────────────────

export interface PokemonSprites extends FullSprites {
    other: PokemonSpritesOther;
    versions: PokemonSpriteVersions;
}

export interface PokemonTypes {
    slot: number;
    type: PokemonForms;
}

export interface PokemonStat {
    name: string;
    url: string;
}

export interface PokemonStats {
    base_stat: number;
    effort: number;
    stat: PokemonStat;
}

export const typeColorMap: Record<string, string> = {
    fire: "#EA580C",
    water: "#2563EB",
    grass: "#16A34A",
    electric: "#EAB308",
    ice: "#06B6D4",
    fighting: "#DC2626",
    poison: "#9333EA",
    ground: "#A16207",
    rock: "#78716C",
    bug: "#65A30D",
    ghost: "#4F46E5",
    dragon: "#7C3AED",
    dark: "#495565",
    fairy: "#EC4899",
    flying: "#3B82F6",
    psychic: "#DB2777",
    steel: "#64748B",
    normal: "#6B7280",
};

export interface Pokemon {
    abilities: PokemonAbilities[];
    baseExperience: number;
    forms: PokemonForms[];
    game_indices: GameIndices[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: PokemonMoves[];
    name: string;
    sprites: PokemonSprites;
    stats: PokemonStats[];
    types: PokemonTypes[];
    weight: number;
}