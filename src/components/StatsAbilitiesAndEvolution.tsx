import SubHeadingH3 from "./SubHeadingH3";
import StatsIcon from "../assets/IconComponents/StatsIcon"
import StarIcon from "../assets/IconComponents/StarIcon";
import StatWithProgressBar from "./StatWithProgressBar";
import { useGetPokemonQuery } from "../services/apiSlice";
import { useRoute, type RouteHook } from "preact-iso";
import ChainIcon from "../assets/IconComponents/ChainIcon";
import Abilities from "./Abilities";
import Evolution from "./Evolution";

export default function StatsAbilitiesAndEvolution() {
    const { params }: RouteHook = useRoute();
    const { data: PokemonData, isLoading: isLoadingPokemonData } = useGetPokemonQuery(params.id as unknown as number)
    return (
        <>
            <div className="py-16 bg-[#f5f6f8] dark:bg-[#121212]">
                <div className="container m-auto flex items-stretch gap-8 justify-between">
                    <div className="w-1/2 pl-4 py-4">
                        <div className="bg-white dark:bg-[#151515] dark:border border-[#282828]  rounded-[48px] p-8">
                            <div className="flex items-center justify-between pb-10">
                                <SubHeadingH3 name="Base Stats" fontSize="24px" />
                                <StatsIcon />
                            </div>
                            {
                                isLoadingPokemonData ? "" :
                                    <div className="">
                                        {
                                            PokemonData?.stats.map((item) => {
                                                return (
                                                    <div className="mt-8 flex items-center justify-between">
                                                        <StatWithProgressBar showNumbers={true} numbers={item.base_stat} stats={PokemonData?.stats} type={item.stat.name} bgColor={"linear-gradient(90deg, #BC0100, #FB923c)"} text={item.stat.name.toUpperCase().split("-").join(" ")} width={"100%"} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="w-1/2 py-4 pr-4">
                        <div className="flex h-full items-stretch gap-8 justify-between">
                            <div className="w-1/2 h-full">
                                <div className="bg-white h-full dark:bg-[#151515] dark:border border-[#282828]  rounded-[48px] p-8">
                                    <div className="flex items-center justify-between pb-10">
                                        <SubHeadingH3 name="Abilities" fontSize="24px" />
                                        <StarIcon />
                                    </div>
                                    <Abilities abilities={PokemonData?.abilities ?? []} data={PokemonData} />
                                </div>
                            </div>
                            <div className="w-1/2 h-full">
                                <div className="bg-white h-full dark:bg-[#151515] dark:border border-[#282828]  rounded-[48px] p-8">
                                    <div className="flex items-center justify-between pb-10">
                                        <SubHeadingH3 name="Evolution" fontSize="24px" />
                                        <ChainIcon />
                                    </div>
                                    <Evolution />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}