import Header from '../components/Header'
import RegionsHeroComponent from '../components/RegionsHeroComponent'
import { useGetRegionsQuery } from '../services/apiSlice'
import { regionBySlug, regionsData } from '../data/regionsData'

export default function Regions() {
  const { data, isLoading, isError, refetch, isFetching } = useGetRegionsQuery(50, {
    refetchOnMountOrArgChange: true,
  })

  const mergedRegions =
    data?.results.map((region) => {
      const profile = regionBySlug.get(region.name)
      return {
        slug: region.name,
        name: profile?.name ?? region.name,
        tagline: profile?.tagline ?? 'A unique Pokémon journey awaits',
        generation: profile?.generation ?? 'Unknown Generation',
        inspiration: profile?.inspiration ?? 'Unknown inspiration',
        badges: profile?.badges ?? ['Pokémon Region'],
        image:
          profile?.image ??
          'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
        colors: profile?.colorTheme ?? {
          primary: '#475569',
          secondary: '#0f172a',
          glow: 'rgba(15,23,42,0.35)',
        },
      }
    }) ?? regionsData

  return (
    <>
      <Header />
      <RegionsHeroComponent />
      <main className="bg-[#F8f9fb] py-14 dark:bg-[#05070c]">
        <section className="container m-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] dark:text-white">Regions Atlas</h2>
              <p className="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">Choose a region to open its premium world profile.</p>
            </div>
            <button onClick={() => refetch()} className="rounded-full border border-white/30 bg-white/80 px-4 py-2 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/10 dark:text-white">
              {isFetching ? 'Refreshing…' : 'Fresh Fetch'}
            </button>
          </div>

          {isLoading && <p className="text-[#64748B] dark:text-[#94A3B8]">Loading regions...</p>}
          {isError && <p className="text-[#BC0100]">Unable to load the latest regions now. Showing curated profiles.</p>}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mergedRegions.map((region, index) => (
              <a
                key={region.slug}
                href={`/regions/${region.slug}`}
                aria-label={`Open ${region.name} region details`}
                className={`group relative overflow-hidden rounded-3xl border border-white/40 bg-white shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#0b1220] ${index % 5 === 0 ? 'lg:col-span-2 lg:row-span-2 min-h-[360px]' : 'min-h-[240px]'}`}
              >
                <img src={region.image} alt={region.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br opacity-90" style={{ backgroundImage: `linear-gradient(145deg, ${region.colors.primary}, ${region.colors.secondary})` }} />
                <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {region.badges.slice(0, 2).map((badge) => (
                      <span key={badge} className="rounded-full bg-white/20 px-2.5 py-1 text-xs backdrop-blur-md">{badge}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-extrabold capitalize">{region.name}</h3>
                  <p className="mt-1 text-sm text-white/90">{region.tagline}</p>
                  <div className="mt-3 flex justify-between text-xs text-white/85">
                    <span>{region.generation}</span>
                    <span>{region.inspiration}</span>
                  </div>
                </div>
                <div className="pointer-events-none absolute -inset-px rounded-3xl ring-1 ring-white/0 transition group-hover:ring-white/45" style={{ boxShadow: `0 0 28px ${region.colors.glow}` }} />
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
