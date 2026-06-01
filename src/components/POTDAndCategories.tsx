import MorePokemons from "./MorePokemons"
import PokemonOfTheDay from "./PokemonOfTheDay"
import Button from "./Button"
export default function POTDAndCategories() {
    return (
        <>
            <div className="pt-12 pb-18 bg-[#F8f9fb] dark:bg-[#121212]">
                <div className="container m-auto  flex items-center justify-between">
                    <div className="w-1/2 flex items-center justify-between">
                        <div className="w-full px-4">
                            <PokemonOfTheDay />
                        </div>
                    </div>
                    <div className="w-1/2 px-4">
                        <MorePokemons />
                    </div>
                </div>
                <div className="container m-auto flex items-center justify-center mt-12">
                    <Button text={"View Full Catalog →"} link={"/catalog"} bgColor="#191C1D" fontColor={"#F8F9FA"} />
                </div>
            </div>
        </>
    )
}
