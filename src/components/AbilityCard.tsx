import { useGetPokemonAbilitiesQuery } from "../services/apiSlice";
import SubHeadingH4 from "./SubHeadingH4";

export default function AbilityCard({ text, abilityId, isHidden }: { text: string, abilityId: number, isHidden: boolean }) {
    const { data: abilities, isLoading: isLoadingAbilities } = useGetPokemonAbilitiesQuery(abilityId);
    return (
        <>
            {isHidden}
            <div className="p-5 rounded-[32px] dark:bg-[#202020] bg-[#f3f4f6] text-[#64748B]">
                {
                    isHidden ?
                        <div className="text-[#0F172A] dark:text-[#0F172A] font-bold items-start flex justify-between">
                            <SubHeadingH4 name={text} fontSize="16px" />
                            <span class={"border-full text-[#475569] text-[12px] bg-[#e2e8f0] py-1 px-2 rounded-[32px]"}>Hidden</span>
                        </div>
                        :
                        <div className="text-[#BC0100] dark:!text-[#BC0100]! font-bold">
                            <SubHeadingH4 name={text} fontSize="16px" />
                        </div>
                }
                {
                    isLoadingAbilities ? "" :
                        <p>{abilities?.flavor_text_entries.find((item) => item.language.name === "en")?.flavor_text}</p>
                }
            </div>
        </>
    )
}