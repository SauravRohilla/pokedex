import SubHeadingH2 from "./SubHeadingH2"
import Tag from "./Tag"
import { pokemonOfTheDay } from "../utlities/helper"
import { useGetPokemonQuery } from "../services/apiSlice"
import PokemonTypes from "./PokemonTypes"
import StatWithProgressBar from "./StatWithProgressBar"
import Button from "./Button"
import POTDBackgroundImages from "./POTDBackgroundImages"

export default function PokemonOfTheDay() {
    const { data, isLoading } = useGetPokemonQuery(pokemonOfTheDay())
    return (
        <>
            {
                isLoading ?
                    <div className="w-full h-40 flex items-center justify-center relative"></div> :
                    <div className="w-full flex items-center justify-center relative">
                        <div className="bg-[#f3f4f6] dark:bg-[#1d2122] rounded-[48px] w-full p-10 z-1 overflow-hidden">
                            <Tag />
                            <SubHeadingH2 name={`${data?.name}`} fontSize="60px" />
                            <PokemonTypes types={data?.types ?? []} />
                            <div className="flex items-center justify-between gap-7 pt-4">
                                <StatWithProgressBar showNumbers={false} numbers={0} stats={data?.stats} type={"attack"} bgColor={"#BC0100"} text={"Base Attack"} width={"50%"} />
                                <StatWithProgressBar showNumbers={false} numbers={0} stats={data?.stats} type={"speed"} bgColor={"#3C4DCB"} text={"Velocity Attack"} width={"50%"} />
                            </div>
                            <div className="z-2  mt-20 relative">
                                <Button text={"View Specimen Data"} link={`pokemon_detail/${data?.id}`} bgColor="#191C1D" fontColor={"#F8F9FA"} />
                            </div>
                            <POTDBackgroundImages data={data} />
                        </div>
                    </div>
            }
        </>
    )
}