import { type PokemonTypes } from "../types/apiDataTypes"
import { tagStyle } from "../utlities/helper"
export default function PokemonTypes({ types }: { types: PokemonTypes[] }) {
    return (
        <>
            <div className="flex items-center justify-start gap-2 flex-wrap">
                {
                    types.map((item) => (
                        <p key={item.type.name} className={
                            `rounded-[9999px] border uppercase px-4 py-1 ${tagStyle(item.type.name)}`
                        }>{item.type.name}</p>
                    ))
                }
            </div >
        </>
    )
}