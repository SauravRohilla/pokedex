import type { PokemonTypes } from "../types/apiDataTypes";
import { Flame, Droplets, Leaf, Zap, Snowflake, Swords, Skull, Mountain, Layers, Bug, Ghost, Moon, Sparkles, Wind, Brain, Cog, Circle } from "lucide-react";

// Data associated with the Lucide
const typeConfig: Record<string, { icon: preact.ComponentType<any>; label: string; color: string; bg: string; border: string }> = {
    fire: { icon: Flame, label: "FIRE", color: "#EA580C", bg: "#F97316", border: "#F97316" },
    water: { icon: Droplets, label: "WATER", color: "#2563EB", bg: "#3B82F6", border: "#3B82F6" },
    grass: { icon: Leaf, label: "GRASS", color: "#16A34A", bg: "#22C55E", border: "#22C55E" },
    electric: { icon: Zap, label: "ELECTRIC", color: "#EAB308", bg: "#FACC15", border: "#FACC15" },
    ice: { icon: Snowflake, label: "ICE", color: "#06B6D4", bg: "#67E8F9", border: "#67E8F9" },
    fighting: { icon: Swords, label: "FIGHTING", color: "#DC2626", bg: "#EF4444", border: "#EF4444" },
    poison: { icon: Skull, label: "POISON", color: "#9333EA", bg: "#A855F7", border: "#A855F7" },
    ground: { icon: Mountain, label: "GROUND", color: "#A16207", bg: "#CA8A04", border: "#CA8A04" },
    rock: { icon: Layers, label: "ROCK", color: "#78716C", bg: "#A8A29E", border: "#A8A29E" },
    bug: { icon: Bug, label: "BUG", color: "#65A30D", bg: "#84CC16", border: "#84CC16" },
    ghost: { icon: Ghost, label: "GHOST", color: "#4F46E5", bg: "#6366F1", border: "#6366F1" },
    // dragon: { icon: Dragon, label: "DRAGON", color: "#7C3AED", bg: "#8B5CF6", border: "#8B5CF6" },
    dark: { icon: Moon, label: "DARK", color: "#495565", bg: "#374151", border: "#374151" },
    fairy: { icon: Sparkles, label: "FAIRY", color: "#EC4899", bg: "#F9A8D4", border: "#F9A8D4" },
    flying: { icon: Wind, label: "FLYING", color: "#3B82F6", bg: "#60A5FA", border: "#60A5FA" },
    psychic: { icon: Brain, label: "PSYCHIC", color: "#DB2777", bg: "#F472B6", border: "#F472B6" },
    steel: { icon: Cog, label: "STEEL", color: "#64748B", bg: "#94A3B8", border: "#94A3B8" },
    dragon: { icon: Cog, label: "STEEL", color: "#64748B", bg: "#94A3B8", border: "#94A3B8" },
    normal: { icon: Circle, label: "NORMAL", color: "#6B7280", bg: "#D1D5DB", border: "#000" },
};


export default function PokemonTypesWithIcons({ types }: { types: PokemonTypes[] }) {
    return (
        <>
            <div className="flex items-center justify-start gap-4">
                {types.map((item) => {
                    const config = typeConfig[item.type.name];
                    if (!config) return null;
                    const { icon: Icon, label, color, bg, border } = config;

                    return (
                        <div
                            key={item.slot}
                            className="flex w-max items-center gap-2 px-3 py-1.5 rounded-full border font-semibold text-sm"
                            style={{
                                backgroundColor: `${bg}1A`,   // ~10% opacity
                                color: color,
                                borderColor: `${border}33`,   // ~20% opacity
                            }}
                        >
                            <Icon size={16} color={color} />
                            <span className="tracking-wide">{label}</span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}