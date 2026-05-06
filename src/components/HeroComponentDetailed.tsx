import PokemonID from "./PokemonID";
import { useGetPokemonQuery, useGetPokemonSpeciesQuery } from "../services/apiSlice";
import { useRoute, type RouteHook } from "preact-iso";
import Heading from "./Heading";
import PokemonTypesWithIcons from "./PokemonTypesWithIcons";
import BodytStats from "./BodyStats";
import type { Genus, FlavorTextEntry } from "../types/pokemonSpeciesDataTypes";
import SubHeadingH3 from "./SubHeadingH3";
import { typeColorMap } from "../types/apiDataTypes";


export default function HeroComponentDetailed() {
    const { params }: RouteHook = useRoute();
    const { data: PokemonData, isLoading: isLoadingPokemonData } = useGetPokemonQuery(params.id as unknown as number)
    const { data: PokemonSpeciesData, isLoading: isLoadingSpeciesData } = useGetPokemonSpeciesQuery(params.id as unknown as number)
    const category = PokemonSpeciesData?.genera.find((item: Genus) => item.language.name === 'en')?.genus;
    const hp = PokemonData?.stats[0].base_stat;
    const primaryType: string = PokemonData?.types.find((item) => item.slot === 1)?.type.name ?? "normal";
    const fontColor = typeColorMap[primaryType]
    const flavors: FlavorTextEntry[] = PokemonSpeciesData?.flavor_text_entries.filter((item: FlavorTextEntry): boolean => item.language.name === "en") ?? [];
    const allFlavors: string[] = flavors.filter((item) => item.language.name == "en").map((item) => item.flavor_text)
    return (
        <>
            <div className="pt-4 bg-[#f5f6f8] dark:bg-[#121212]">
                <div className="container m-auto flex items-center gap-20 justify-center">
                    {
                        isLoadingPokemonData ?
                            "" :
                            (
                                <>
                                    <div className="w-1/3 p-4">
                                        <div className="rounded-[48px] p-1" style={{ background: `linear-gradient(135deg, ${fontColor}, transparent)`, }}>
                                            <div className="rounded-[47px] p-4 h-full w-full bg-white dark:bg-[#1d2122]">
                                                <div className="flex items-center justify-between mb-2">
                                                    <SubHeadingH3 fontSize="20px" name={PokemonData?.name} />
                                                    <div className="flex items-center" style={{ color: `${fontColor}` }}>
                                                        <span class={"text-[12px] text-[#94A3B8]"}>HP</span>
                                                        <SubHeadingH3 fontSize="32px" name={hp as unknown as string} />
                                                    </div>
                                                </div>
                                                <div className="h-80">
                                                    <div className="w-full h-full overflow-hidden p-9 relative flex items-center justify-center">
                                                        <img class={"w-full h-full bg-[#dbdcde] rounded-[32px] dark:bg-[#191a1c] absolute right-0 bottom-0"} src={PokemonData?.sprites.other["official-artwork"].front_default ?? undefined} alt={PokemonData?.name} />
                                                        <img class={"bg-black opacity-100 relative"} src={PokemonData?.sprites.other["official-artwork"].front_default ?? undefined} style={{ filter: `drop-shadow(0 0 20px ${fontColor})` }} alt={PokemonData?.name} />
                                                    </div>
                                                </div>
                                                <div className="pt-4">
                                                    <div className="flex items-center justify-between border-b-1 border-[#EDEEEF] py-2">
                                                        <SubHeadingH3 name={category ?? ""} fontSize="12px" />
                                                        <div className="text-[#191C1D] text-[12px] dark:text-white">
                                                            <span>HT:{PokemonData?.height}m&nbsp;</span>
                                                            <span>WT:{PokemonData?.weight}kg</span>
                                                        </div>
                                                    </div>
                                                    <p class={"text-[10px] text-[#475569] dark:text-white mt-2"}>{allFlavors[0]}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-2/3">
                                        <div className="mb-2 tracking-[3.6px]">
                                            <PokemonID id={PokemonData?.id} fontSize="18px" fontColor={fontColor} />
                                        </div>
                                        <Heading name={PokemonData?.name} fontColor="#0F172A" />
                                        <div className="mt-8">
                                            <PokemonTypesWithIcons types={PokemonData?.types ?? []} />
                                        </div>
                                        {
                                            isLoadingSpeciesData ?
                                                "" :
                                                <div className="mt-8">
                                                    <BodytStats height={PokemonData?.height ?? 0} weight={PokemonData?.weight ?? 0} category={category ?? "Not Found"} />
                                                </div>
                                        }
                                        {
                                            isLoadingSpeciesData ?
                                                "" :
                                                <p class={"text-[20px] mt-8 text-[#475569] dark:text-white"}>{allFlavors.length > 0 ? allFlavors[allFlavors.length - 1] : allFlavors[0]}</p>
                                        }

                                    </div>
                                </>
                            )
                    }
                </div>
            </div>
        </>
    )
}