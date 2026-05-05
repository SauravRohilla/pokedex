import type { Pokemon } from "../types/apiDataTypes";
import PokemonID from "./PokemonID";

export default function POTDBackgroundImages({ data }: { data: Pokemon | undefined }) {
    return (
        <>
            <div className="absolute right-0 top-0 bottom-0 w-[70%] h-full">
                <div className="h-full text-right flex justify-around flex-col">
                    <div className="mr-8 mt-8">
                        <PokemonID fontSize="36px" id={data?.id} fontColor="#E2E8F0" />
                    </div>
                    <div className="w-full h-full relative flex items-center justify-start">
                        <img class={"w-full h-full rounded-br-[48px]  z-[-1] bg-[#dbdcde] dark:bg-[#191a1c] absolute right-0 bottom-0"} src={data?.sprites.other["official-artwork"].front_shiny ?? "src/assets/images/pokeball-pokemon-svgrepo-com.svg"} alt={data?.name} />
                        <img class={"w-[40%] z-[-1] ml-4 bg-black opacity-100 relative"} src={data?.sprites.other["official-artwork"].front_default ?? "src/assets/images/pokeball-pokemon-svgrepo-com.svg"} alt={data?.name} />
                    </div>
                </div>
            </div>
        </>
    )
}