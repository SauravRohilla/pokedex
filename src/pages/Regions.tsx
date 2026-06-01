import Header from '../components/Header'
import RegionsHeroComponent from '../components/RegionsHeroComponent'
import { useGetRegionsQuery } from '../services/apiSlice'
import { regionsData } from '../data/regionsData'

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
          </div>

          {isLoading && <p className="text-[#64748B] dark:text-[#CBD5E1]">Loading regions...</p>}
          {isError && (
            <p className="text-[#BC0100]">
              Could not load regions right now. Please try a fresh fetch.
            </p>
          )}

          {regions && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {regions.results.map((region) => {
                const imgSrc = regionsData.find((item) => item.slug === region.name)?.image
                console.log(imgSrc)
                return (
                  <a href={'./regions/' + region.name}>
                    <article
                      key={region.name}
                      style={{ backgroundImage: `url(${imgSrc})` }}
                      className="h-50 rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm dark:border-[#1E293B] dark:bg-[#0F172A]"
                    >
                      <h3 className="text-lg font-bold text-[#BC0100] capitalize dark:text-[#F8FAFC]">
                        {region.name}
                      </h3>
                    </article>
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
