import type { Pokemon, PokemonAbilities } from "../types/apiDataTypes"
import AbilityCard from "./AbilityCard"
import { typeColorMap } from "../types/apiDataTypes";

export default function Abilities({ abilities, data }: { abilities: PokemonAbilities[], data: Pokemon | undefined }) {
    const primaryType: string = data?.types.find((item) => item.slot === 1)?.type.name ?? "grass";
    const color = typeColorMap[primaryType];
    return (
        <>
            {
                abilities && abilities.map((item) => {
                    return (
                        <div className="mb-6" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
                            <AbilityCard text={item.ability.name} abilityId={item.ability.url.slice(0, -1).split("/").at(-1) as unknown as number} isHidden={item.is_hidden} />
                        </div>
                    )
                })
            }
        </>
    )
}