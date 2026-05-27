import { getMorePokemons } from "../utlities/helper";
import PokemonCard from "./PokemonCard";

export default function MorePokemons() {
    const pokemonIds: number[] = getMorePokemons();
    return (
        <>
            <div className="flex gap-8 flex-wrap items-stretch">
                {
                    pokemonIds.map((item: number) => {
                        return <PokemonCard key={item} widthOfCard="45%" id={item} />
                    })
                }
            </div>
        </>
    )
}
