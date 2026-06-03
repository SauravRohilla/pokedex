import { useEffect, useMemo, useState } from 'preact/hooks'
import Header from '../components/Header'
import PokemonCard from '../components/PokemonCard'
import type { PokemonListItem, PokemonListResponse } from '../types/searchPokemons'

const PAGE_SIZE = 12

export default function Catalog() {
  const [allPokemons, setAllPokemons] = useState<PokemonListItem[]>([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchAll() {
      try {
        setIsLoading(true)
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000')
        if (!res.ok) throw new Error('Unable to fetch Pokémon catalog.')
        const data = (await res.json()) as PokemonListResponse
        setAllPokemons(data.results)
      } catch {
        setError('Could not load the catalog. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchAll()
  }, [])

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    if (!term) return allPokemons
    return allPokemons.filter((item) => item.name.includes(term))
  }, [allPokemons, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <>
      <Header />
      <main className="bg-[#F8f9fb] px-4 py-12 dark:bg-[#121212]">
        <div className="container m-auto">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-[#0F172A] dark:text-white">
                Pokémon Catalog
              </h1>
              <p className="text-[#64748B] dark:text-[#CBD5E1]">
                Browse, search and open full specimen data.
              </p>
            </div>
            <input
              value={search}
              onInput={(e) => {
                setSearch((e.target as HTMLInputElement).value)
                setPage(1)
              }}
              className="w-full rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 outline-none md:w-80 dark:border-[#334155] dark:bg-[#1D2122] dark:text-white"
              placeholder="Search by name"
              aria-label="Search Pokémon catalog"
            />
          </div>

          {isLoading && <p className="py-16 text-center text-[#64748B]">Loading catalog...</p>}
          {error && <p className="py-16 text-center text-[#BC0100]">{error}</p>}

          {!isLoading && !error && (
            <>
              <div className="flex flex-wrap justify-between gap-6">
                {pageItems.map((item) => {
                  const id = Number(item.url.slice(0, -1).split('/').at(-1))
                  return <PokemonCard key={item.name} widthOfCard="32%" id={id} />
                })}
              </div>
              {pageItems.length === 0 && (
                <p className="py-16 text-center text-[#64748B]">No matching Pokémon found.</p>
              )}

              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-full bg-[#191C1D] px-5 py-2 text-white disabled:opacity-40"
                >
                  Previous
                </button>
                <span className="text-sm text-[#64748B] dark:text-[#CBD5E1]">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-full bg-[#191C1D] px-5 py-2 text-white disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  )
}
