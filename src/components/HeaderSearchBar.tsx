import { useEffect, useState } from 'preact/hooks'
import searchIcon from '../assets/images/Container.svg'
import { handleInput } from '../utlities/helper'
import type { PokemonListItem, PokemonListResponse } from '../types/searchPokemons'

export default function HeaderSearchBar() {
  const [value, setValue] = useState<string>('')
  const [data, setData] = useState<PokemonListResponse>()
  let items = null
  if (data) {
    items = data.results.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
  }

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
      setData(await res.json())
    }
    fetchPokemon()
  }, [value])

  return (
    <>
      <div className="relative w-1/4">
        <div className="flex items-center justify-around gap-2 rounded-[40px] bg-[#F3F4F5] px-2 py-4">
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            onKeyPress={(e) => handleInput(e, setValue)}
            onInput={(e) => setValue((e.target as HTMLInputElement).value)}
            value={value}
            id="search-pokemon"
            class={'border-none bg-transparent outline-none'}
            placeholder={'Search Pokemon...'}
          />
        </div>
        {items && items.length > 0 && value !== '' && (
          <ul className={'absolute max-h-30 w-full overflow-scroll bg-white p-2'} id="pokemon-list">
            {items.map((item: PokemonListItem) => {
              console.log('Itmes: ', { items })

              console.log({ value })
              return (
                <li onClick={() => setValue('')}>
                  <a href={item.url.slice(0, -1).split('/').at(-1)} className={'capitalize'}>
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
