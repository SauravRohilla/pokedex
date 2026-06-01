import HeroHeading from './HeroHeading'
import HeroSubHeading from './HeroSubHeading'
import { randomPokemonId } from '../utlities/helper'
import { useGetPokemonQuery } from '../services/apiSlice'

export default function RegionsHeroComponent() {
  const { data, isLoading } = useGetPokemonQuery(randomPokemonId())
  return (
    <>
      <div className="bg-[#F8f9fb] pt-16 dark:bg-[#121212]">
        <div className="container m-auto">
          <div className="flex items-center justify-between">
            <div className="w-1/2 px-4">
              <HeroHeading value="World" specialColoredValue={'Regions'} colorValue={'#BC0100'} />
              <HeroSubHeading
                value="Explore the vast geological diversity of the Pokémon world. From the
mountainous peaks of Sinnoh to the tropical archipelagos of Alola, every
region holds its own secrets and biodiversity."
              />
            </div>
            <div className="w-1/2 px-4">
              <div className="flex h-112.5 w-full items-center justify-center">
                {isLoading ? (
                  '...'
                ) : (
                  <img
                    src={
                      data?.sprites.other['official-artwork'].front_default ??
                      `src/assets/images/Rapidash.png`
                    }
                    class={'h-auto w-auto object-contain'}
                    alt="Saurav's PokeDex"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
