import HeroHeading from "./HeroHeading";
import HeroSubHeading from "./HeroSubHeading";
import { randomPokemonId } from "../utlities/helper";
import { useGetPokemonQuery } from "../services/apiSlice";

export default function HeroComponent() {
    const { data, isLoading } = useGetPokemonQuery(randomPokemonId());
    return (
        <>
            <div className="pt-16 bg-[#F8f9fb] dark:bg-[#121212]">
                <div className="container m-auto">
                    <div className="flex items-center justify-between">
                        <div className="w-1/2 px-4">
                            <HeroHeading value="Find your next" specialColoredValue={"specimen"} colorValue={"#BC0100"} />
                            <HeroSubHeading value="The world’s most advanced kinetic database. Detailed metrics, regional variants, and competitive analysis in high fidelity." />
                        </div>
                        <div className="w-1/2 px-4">
                            <div className="w-full h-112.5 flex items-center justify-center">
                                {
                                    isLoading ? "..." :
                                        <img src={data?.sprites.other['official-artwork'].front_default ?? `src/assets/images/Rapidash.png`} class={"w-auto h-auto object-contain"} alt="Saurav's PokeDex" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}