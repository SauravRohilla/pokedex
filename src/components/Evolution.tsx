import { useRoute } from "preact-iso"
import { useGetPokemonEvolutionQuery, useGetPokemonSpeciesQuery } from "../services/apiSlice";
import { flattenEvolutionChain } from "../utlities/helper";
import EvolutionStage from "./EvolutionStage";

export default function Evolution() {
    const { params } = useRoute();
    const { data: speciesData, isLoading: isLoadingSpeciesData } = useGetPokemonSpeciesQuery(params.id as unknown as number)

    const { data, isLoading } = useGetPokemonEvolutionQuery(speciesData?.evolution_chain.url.slice(0, -1).split("/").at(-1) as unknown as number ?? 1);
    const evolutions = flattenEvolutionChain(data?.chain)
    return (
        <>
            {
                isLoading && isLoadingSpeciesData ? "..." :
                    <div className="flex items-center justify-center flex-col gap-5">
                        {
                            evolutions.map((evo, i) => {
                                return (
                                    <>
                                        <EvolutionStage isFirst={evo.isFirst} isLast={evo.isLast} key={evo.name} name={evo.name} level={evo.minLevel as unknown as number} id={evo.url.slice(0, -1).split("/").at(-1) as unknown as number} />
                                        {i !== evolutions.length - 1 &&
                                            <div className="flex flex-col items-center">
                                                <svg class="w-6 h-6 text-gray-400">
                                                    <path d="M12 5v14m0 0l-5-5m5 5l5-5" stroke="currentColor" stroke-width="2" fill="none" />
                                                </svg>
                                            </div>
                                        }
                                    </>

                                )
                            })
                        }
                    </div>
            }
        </>
    )
}