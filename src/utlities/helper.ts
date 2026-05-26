import { signal } from '@preact/signals'
import type { ChainLink, FlatEvolution } from '../types/evolutionTypes'
import type { Dispatch } from '@reduxjs/toolkit'
import { useGetPokemonQuery } from '../services/apiSlice'

type Theme = 'dark' | 'light'
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
export const theme = signal<Theme>(prefersDark ? 'dark' : 'light')

export function setTheTheme(mode: 'dark' | 'light') {
  mode === 'dark' ? (theme.value = 'dark') : (theme.value = 'light')
}

// Random pokemon for Hero Section
export function randomPokemonId(): number {
  return Math.floor(Math.random() * 650)
}

// Function to get more pokemons, for now it only fetches 4 pokemons
export function getMorePokemons(): number[] {
  const date: number = new Date().getDate()
  let tempArray: number[] = []
  if (
    localStorage.getItem('Pokemons_Saved_On') &&
    (JSON.parse(localStorage.getItem('Pokemons_Saved_On') ?? '') as number) !== date
  ) {
    localStorage.removeItem('Pokemon_Ids')
  }
  if (localStorage.getItem('Pokemon_Ids')) {
    tempArray = JSON.parse(localStorage.getItem('Pokemon_Ids') ?? '[]') as number[]
    return tempArray
  }
  for (let i = 0; i < 4; i++) {
    tempArray.push(randomPokemonId())
  }
  localStorage.setItem('Pokemon_Ids', JSON.stringify(tempArray))
  localStorage.setItem('Pokemons_Saved_On', JSON.stringify(date))

  return tempArray
}

// Helper hash function
function hashFunction(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0 // convert to 32-bit integer
  }
  return Math.abs(hash % 1010)
}

// Pokemon of the Day
export function pokemonOfTheDay(): number {
  const date: Date = new Date()
  const currentDate: number = hashFunction(date.toISOString().split('T')[0])
  return currentDate
}

// function for Pokemon tag styling according to their types
export function tagStyle(pokemonType: string): string {
  const styles: Record<string, string> = {
    fire: 'bg-[#F97316]/10 text-[#EA580C] border-[#F97316]/20',
    water: 'bg-[#3B82F6]/10 text-[#2563EB] border-[#3B82F6]/20',
    grass: 'bg-[#22C55E]/10 text-[#16A34A] border-[#22C55E]/20',
    electric: 'bg-[#FACC15]/10 text-[#EAB308] border-[#FACC15]/20',
    ice: 'bg-[#67E8F9]/10 text-[#06B6D4] border-[#67E8F9]/20',
    fighting: 'bg-[#EF4444]/10 text-[#DC2626] border-[#EF4444]/20',
    poison: 'bg-[#A855F7]/10 text-[#9333EA] border-[#A855F7]/20',
    ground: 'bg-[#CA8A04]/10 text-[#A16207] border-[#CA8A04]/20',
    rock: 'bg-[#A8A29E]/10 text-[#78716C] border-[#A8A29E]/20',
    bug: 'bg-[#84CC16]/10 text-[#65A30D] border-[#84CC16]/20',
    ghost: 'bg-[#6366F1]/10 text-[#4F46E5] border-[#6366F1]/20',
    dragon: 'bg-[#8B5CF6]/10 text-[#7C3AED] border-[#8B5CF6]/20',
    dark: 'bg-[#374151]/10 text-[#495565] border-[#374151]/20',
    fairy: 'bg-[#F9A8D4]/10 text-[#EC4899] border-[#F9A8D4]/20',
    flying: 'bg-[#60A5FA]/10 text-[#3B82F6] border-[#60A5FA]/20',
    psychic: 'bg-[#F472B6]/10 text-[#DB2777] border-[#F472B6]/20',
    steel: 'bg-[#94A3B8]/10 text-[#64748B] border-[#94A3B8]/20',
    normal: 'bg-[#D1D5DB]/10 text-[#6B7280] border-[#000]/20',
  }

  return styles[pokemonType] ?? styles['normal']
}

export function flattenEvolutionChain(chain: ChainLink | undefined): FlatEvolution[] {
  const result: FlatEvolution[] = []

  let current: ChainLink | undefined = chain

  while (current) {
    result.push({
      name: current.species.name,
      minLevel: current.evolution_details[0]?.min_level ?? null,
      trigger: current.evolution_details[0]?.trigger?.name ?? 'base',
      url: current.species.url,
      isLast: current.evolves_to.length === 0,
      isFirst: current.evolution_details.length === 0,
    })
    current = current.evolves_to[0] // follow the main chain
  }
  return result
}

export function habitatImage(type: string) {
  const src: Record<string, string> = {
    cave: 'cave.png',
    forest: 'forest.png',
    grassland: 'grassland.png',
    mountain: 'mountain.png',
    rare: 'rare.png',
    'rough-terrain': 'rough-terrain.png',
    sea: 'sea.png',
    urban: 'urban.png',
    'waters-edge': 'water.png',
  }
  return src[type]
}

// Funciton to handle Search
export function handleInput(
  e: React.KeyboardEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) {
  if (e.key === 'Enter') console.log('Enter pressed!')
  setValue(e.currentTarget.value)
}
