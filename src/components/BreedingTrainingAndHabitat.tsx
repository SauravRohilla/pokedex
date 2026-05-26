<<<<<<< HEAD
import { useRoute } from "preact-iso";
import { useGetHabitatQuery, useGetPokemonSpeciesQuery } from "../services/apiSlice";
import SubHeadingH2 from "./SubHeadingH2";
import MaleIcon from "../assets/IconComponents/MaleIcon";
import FemaleIcon from "../assets/IconComponents/FemaleIcon";
import { habitatImage } from "../utlities/helper";
import SubHeadingH3 from "./SubHeadingH3";

export default function BreedingTrainingAndHabitat() {
    const { params } = useRoute();
    const { data, isLoading } = useGetPokemonSpeciesQuery(Number(params.id))
    const habitatId: number = data?.habitat?.url.slice(0, -1).split("/").at(-1) as unknown as number ?? 1;
    const { data: HabitatData, isLoading: isLoadingHabitatData } = useGetHabitatQuery(habitatId)
    return (
        <>
            <div className="bg-[#f5f6f8] pb-20 dark:bg-[#121212]">
                <div className="container px-4 m-auto">
                    <div className="flex p-12 bg-white dark:bg-[#151515] items-stretch justify-between rounded-[48px]">
                        <div className="w-1/2 pl-4 border-r border-[#475569]">
                            <div className="mb-6">
                                <SubHeadingH2 name={"Breeding & Training"} fontSize="30px" />
                            </div>
                            {
                                isLoading ? "..." :
                                    <div className="flex flex-wrap gap-8 items-center justify-between">
                                        <div className="w-[45%]">
                                            <p class={"uppercase text-[12px] font-bold text-[#94A3B8] pb-2"}>Egg Groups</p>
                                            <div className="flex items-center gap-2 gap-y-2 justify-start">
                                                {
                                                    data?.egg_groups.map((item) => {
                                                        return (
                                                            <span class="text-[#475569] uppercase py-1 px-3 bg-white rounded-[32px]">{item.name}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="w-[45%]">
                                            <p class={"uppercase text-[12px] font-bold text-[#94A3B8] pb-2"}>Base Happiness</p>
                                            <h3 class={"text-[20px] text-black  dark:text-white"}>{data?.base_happiness}</h3>
                                        </div>
                                        <div className="w-[45%]">
                                            <p class={"uppercase text-[12px] font-bold text-[#94A3B8] pb-2"}>Gender Ratio</p>
                                            <div className="flex items-center justify-start gap-2">
                                                <h3 class={"text-[20px] flex items-center gap-1 text-black  dark:text-white"}><MaleIcon />{((8 - (data?.gender_rate ?? 0)) / 8) * 100}%</h3>
                                                <h3 class={"text-[20px] flex items-center gap-1 text-black  dark:text-white"}><FemaleIcon />{((data?.gender_rate ?? 0) / 8) * 100}%</h3>
                                            </div>
                                        </div>
                                        <div className="w-[45%]">
                                            <p class={"uppercase text-[12px] font-bold text-[#94A3B8] pb-2"}>Capture Rate</p>
                                            <div className="flex items-center justify-start gap-2">
                                                <h3 class={"text-[20px] flex items-center gap-1 text-black  dark:text-white"}>{data?.capture_rate} <span class="text-[14px] text-[#94A3B8]">{Math.round(((data?.capture_rate ?? 0) / 255) * 100)}%</span></h3>
                                            </div>
                                        </div>

                                    </div>
                            }

                        </div>
                        <div className="w-1/2 pl-12">
                            <div className="mb-6">
                                <SubHeadingH2 name={"Habitat"} fontSize="30px" />
                            </div>
                            <div className="w-full flex items-end h-55 object-contain relative rounded-[32px] overflow-hidden">
                                {
                                    !isLoading && data?.habitat?.name ?
                                        <img class="absolute dark:border dark:border-[#282828] w-full h-full inset-0" src={"/src/assets/HabitatImages/" + habitatImage(data?.habitat.name ?? "cave")} alt="Saurav's Pokedex" /> :
                                        <img class="absolute dark:border dark:border-[#282828] w-full h-full inset-0" src={"/src/assets/HabitatImages/" + habitatImage("cave")} alt="Saurav's Pokedex" />
                                }
                                {
                                    isLoadingHabitatData ? "" :
                                        <div className="z-1 ml-6 mb-6 relative text-white">
                                            <SubHeadingH3 name={HabitatData?.name.split("-").join(" ") ?? ""} fontSize="32px" />
                                            <p class={"text-[14px]"}></p>
                                        </div>
                                }

=======
import SubHeadingH2 from "./SubHeadingH2";

export default function BreedingTrainingAndHabitat() {
    return (
        <>
            <div className="py-12 bg-[#f3f4f6]">
                <div className="container m-auto">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2">
                            <div className="mb-6">
                                <SubHeadingH2 name={"Breedin & Training"} fontSize="30px" />
>>>>>>> origin/main
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
<<<<<<< HEAD
} 
=======
}
>>>>>>> origin/main
