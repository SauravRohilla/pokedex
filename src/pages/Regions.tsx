import Header from '../components/Header'
import RegionsHeroComponent from '../components/RegionsHeroComponent'
import { useGetRegionsQuery } from '../services/apiSlice'

export default function Regions() {
  const {
    data: regions,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetRegionsQuery(50, {
    refetchOnMountOrArgChange: true,
  })

  return (
    <>
      <Header />
      <RegionsHeroComponent />
      <section className="bg-[#F8f9fb] py-12 dark:bg-[#121212]">
        <div className="container m-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">All Regions</h2>
            <button
              type="button"
              onClick={() => refetch()}
              className="rounded-md bg-[#BC0100] px-4 py-2 text-sm font-semibold text-white hover:bg-[#9f0100]"
            >
              {isFetching ? 'Refreshing...' : 'Fresh Fetch'}
            </button>
          </div>

          {isLoading && <p className="text-[#64748B] dark:text-[#CBD5E1]">Loading regions...</p>}
          {isError && (
            <p className="text-[#BC0100]">Could not load regions right now. Please try a fresh fetch.</p>
          )}

          {regions && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {regions.results.map((region) => (
                <article
                  key={region.name}
                  className="rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm dark:border-[#1E293B] dark:bg-[#0F172A]"
                >
                  <h3 className="text-lg font-bold capitalize text-[#0F172A] dark:text-[#F8FAFC]">
                    {region.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#64748B] dark:text-[#94A3B8]">
                    Endpoint: <span className="break-all">{region.url}</span>
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
