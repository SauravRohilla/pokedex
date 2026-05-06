import { useRoute } from "preact-iso";
import { useGetPokemonSpeciesQuery } from "../services/apiSlice";
import SubHeadingH2 from "./SubHeadingH2";
import SubHeadingH3 from "./SubHeadingH3";
import MaleIcon from "../assets/IconComponents/MaleIcon";
import FemaleIcon from "../assets/IconComponents/FemaleIcon";
import { habitatImage } from "../utlities/helper";

export default function BreedingTrainingAndHabitat() {
    const { params } = useRoute();
    const { data, isLoading } = useGetPokemonSpeciesQuery(Number(params.id))
    return (
        <>
            <div className="p-12 bg-[#f8f9fb]">
                <div className="container m-auto">
                    <div className="flex items-start justify-between">
                        <div className="w-1/2 pb-14 border-r-1 border-[#475569]">
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
                                            <h3 class={"text-[20px] text-black"}>{data?.base_happiness}</h3>
                                        </div>
                                        <div className="w-[45%]">
                                            <p class={"uppercase text-[12px] font-bold text-[#94A3B8] pb-2"}>Gender Ratio</p>
                                            <div className="flex items-center justify-start gap-2">
                                                <h3 class={"text-[20px] flex items-center gap-1 text-black"}><MaleIcon />{((8 - (data?.gender_rate ?? 0)) / 8) * 100}%</h3>
                                                <h3 class={"text-[20px] flex items-center gap-1 text-black"}><FemaleIcon />{((data?.gender_rate ?? 0) / 8) * 100}%</h3>
                                            </div>
                                        </div>
                                        <div className="w-[45%]">
                                            <p class={"uppercase text-[12px] font-bold text-[#94A3B8] pb-2"}>Capture Rate</p>
                                            <div className="flex items-center justify-start gap-2">
                                                <h3 class={"text-[20px] flex items-center gap-1 text-black"}>{data?.capture_rate} <span class="text-[14px] text-[#94A3B8]">{Math.round(((data?.capture_rate ?? 0) / 255) * 100)}%</span></h3>
                                            </div>
                                        </div>

                                    </div>
                            }

                        </div>
                        <div className="w-1/2 pl-12">
                            <div className="mb-6">
                                <SubHeadingH2 name={"Habitat"} fontSize="30px" />
                            </div>
                            <div className="w-full h-55 object-contain relative rounded-[32px] overflow-hidden">
                                {
                                    data?.habitat?.name ?
                                        <img class="absolute w-full h-full inset-0" src={"/src/assets/HabitatImages/" + habitatImage(data?.habitat.name ?? "cave")} alt="Saurav's Pokedex" /> :
                                        <img class="absolute w-full h-full inset-0" src={"/src/assets/HabitatImages/" + habitatImage("cave")} alt="Saurav's Pokedex" />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 