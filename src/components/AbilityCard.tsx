import { useGetPokemonAbilitiesQuery } from '../services/apiSlice'
import SubHeadingH4 from './SubHeadingH4'

export default function AbilityCard({
  text,
  abilityId,
  isHidden,
}: {
  text: string
  abilityId: number
  isHidden: boolean
}) {
  const { data: abilities, isLoading: isLoadingAbilities } = useGetPokemonAbilitiesQuery(abilityId)
  return (
    <>
      {isHidden}
      <div className="rounded-[32px] bg-[#f3f4f6] p-5 text-[#64748B] dark:bg-[#202020]">
        {isHidden ? (
          <div className="flex items-start justify-between font-bold text-[#0F172A] dark:text-[#0F172A]">
            <SubHeadingH4 name={text} fontSize="16px" />
            <span
              class={
                'border-full min-w-16 rounded-[32px] bg-[#e2e8f0] px-2 py-1 text-[12px] text-[#475569]'
              }
            >
              Hidden
            </span>
          </div>
        ) : (
          <div className="dark:!text-[#BC0100]! font-bold text-[#BC0100]">
            <SubHeadingH4 name={text} fontSize="16px" />
          </div>
        )}
        {isLoadingAbilities ? (
          ''
        ) : (
          <p>
            {
              abilities?.flavor_text_entries.find((item) => item.language.name === 'en')
                ?.flavor_text
            }
          </p>
        )}
      </div>
    </>
  )
}
