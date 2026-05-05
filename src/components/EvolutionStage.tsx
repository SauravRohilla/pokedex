import { useGetPokemonQuery } from "../services/apiSlice"
import { typeColorMap } from "../types/apiDataTypes"
import SubHeadingH4 from "./SubHeadingH4"

export default function EvolutionStage({ name, level, id }: { name: string, level: number, id: number }) {
    const { data, isLoading } = useGetPokemonQuery(id)
    const primaryType: string = data?.types.find((item) => item.slot === 1)?.type.name ?? "normal";
    const fontColor = typeColorMap[primaryType];
    return (
        <>
            <a href={`/pokemon_detail/${id}`}>
                <div className="flex items-center justify-start gap-6">
                    <div className="rounded-full w-[45%] bg-[#EDEEEF] dark:bg-transparent">
                        {
                            isLoading ?
                                <img style={{ filter: `drop-shadow(0 0 30px ${fontColor})` }} src={"src/assets/images/pokeball-pokemon-svgrepo-com.svg"} alt={"Saurav's Pokedex"} class="w-full h-full object-cover p-2" /> :
                                <img style={{ filter: `drop-shadow(0 0 30px ${fontColor})` }} src={data?.sprites.other['official-artwork'].front_shiny ?? "src/assets/images/pokeball-pokemon-svgrepo-com.svg"} alt={name} class="w-full h-full object-cover p-2" />
                        }
                    </div>
                    <div className={`w-24 dark:text${fontColor}!`}>
                        <SubHeadingH4 name={name} fontSize="18px" />
                        {
                            level ?
                                <span class={"text-[12px] text-[#94A3B8]"}>LEVEL {level}</span>
                                : <span class={"text-[12px] text-[#94A3B8]"}>STAGE 1</span>
                        }
                    </div>

                </div>
            </a>
        </>
    )
}