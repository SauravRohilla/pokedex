import { useEffect, useState } from 'preact/hooks'
import searchIcon from '../assets/images/Container.svg'
import type { PokemonListItem, PokemonListResponse } from '../types/searchPokemons'

export default function HeaderSearchBar() {
  const [value, setValue] = useState<string>('')
  const [debouncedValue, setDebouncedValue] = useState<string>('')
  const [data, setData] = useState<PokemonListResponse>()
  const items =
    data?.results.filter((item) => item.name.toLowerCase().includes(debouncedValue.toLowerCase())) ?? []

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, 200)

    return () => clearTimeout(timeout)
  }, [value])

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
      setData(await res.json())
    }
    fetchPokemon()
  }, [])

  return (
    <>
      <div className="relative w-1/4">
        <div className="flex items-center justify-around gap-2 rounded-[40px] bg-[#F3F4F5] px-2 py-4">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            onInput={(e) => setValue((e.target as HTMLInputElement).value)}
            value={value}
            id="search-pokemon"
            class={'border-none bg-transparent outline-none'}
            placeholder={'Search Pokemon...'}
          />
        </div>
        {items.length > 0 && debouncedValue !== '' && (
          <ul className={'absolute max-h-30 w-full overflow-scroll bg-white p-2'} id="pokemon-list">
            {items.slice(0, 12).map((item: PokemonListItem) => {
              const pokemonId = item.url.slice(0, -1).split('/').at(-1)
              return (
                <li key={item.name} onClick={() => setValue('')}>
                  <a href={`/pokemon_detail/${pokemonId}`} className={'capitalize'}>
                    {item.name.split('-').join(' ')}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}
