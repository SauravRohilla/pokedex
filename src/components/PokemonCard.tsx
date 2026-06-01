import PokemonID from "./PokemonID";
import { useGetPokemonQuery } from "../services/apiSlice";
import SubHeadingH3 from "./SubHeadingH3";
import PokemonTypes from "./PokemonTypes";

export default function PokemonCard({ widthOfCard, id }: { widthOfCard: string, id: number }) {
    const { data, isLoading, isError } = useGetPokemonQuery(id)
    return (
        <>
            {
                isLoading ?
                    <div className="bg-[#e2e3e5] h-37.5 dark:bg-[#1d2122] rounded-[48px] p-6 border-0" style={{ width: `${widthOfCard}` }}>

                    </div> :
                    isError ?
                        <div className="bg-[#e2e3e5] dark:bg-[#1d2122] rounded-[48px] p-6 border-0" style={{ width: `${widthOfCard}` }}>
                            <p className="text-sm text-[#475569] dark:text-[#c8c8c8]">Failed to load Pokémon.</p>
                        </div> :
                    <div className="bg-[#e2e3e5] dark:bg-[#1d2122] rounded-[48px] p-6 border-0" style={{ width: `${widthOfCard}` }}>
                        <a href={`/pokemon_detail/${data?.id}`} className="block">
                        <PokemonID fontSize="12px" id={data?.id} fontColor="#94A3B8" />
                        <div className="my-4 items-center flex justify-center">
                            <img class={"w-[70%]"} src={data?.sprites.other["official-artwork"].front_default ?? "src/assets/images/pokeball-pokemon-svgrepo-com.svg"} alt={data?.name} />
                        </div>
                        <div className="mb-4">
                            <SubHeadingH3 name={data?.name} fontSize="20px" />
                        </div>
                        <div className="text-[10px]">
                            <PokemonTypes types={data?.types ?? []} />
                        </div>
                        </a>
                    </div>
            }
        </>
    )
}
