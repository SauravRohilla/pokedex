import Header from '../components/Header'
import NotFound from './NotFound'
import { regionBySlug } from '../data/regionsData'

type Props = { slug?: string }

export default function RegionDetail({ slug }: Props) {
  const region = slug ? regionBySlug.get(slug) : undefined

  if (!region) {
    return <NotFound />
  }

  return (
    <>
      <Header />
      <main className="bg-[#F8f9fb] pb-16 dark:bg-[#05070c]">
        <section className="relative overflow-hidden">
          <img
            src={region.banner}
            alt={`${region.name} banner`}
            className="h-105 w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(120deg, ${region.colorTheme.primary}CC, #020617AA)`,
            }}
          />
          <div className="relative container m-auto px-4 py-16 text-white">
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
              {region.generation}
            </p>
            <h1 className="text-5xl font-black">{region.name}</h1>
            <p className="mt-3 max-w-2xl text-lg text-white/90">{region.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {region.badges.map((tag) => (
                <span key={tag} className="rounded-full bg-white/20 px-3 py-1 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="container m-auto mt-8 grid gap-5 px-4 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-5 shadow-sm lg:col-span-2 dark:bg-[#0b1220]">
            <h2 className="text-2xl font-extrabold text-[#0F172A] dark:text-white">
              Region Highlights
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-bold dark:text-white">Professor</h3>
                <p className="text-[#64748B] dark:text-[#94A3B8]">{region.professor}</p>
              </div>
              <div>
                <h3 className="font-bold dark:text-white">Inspiration</h3>
                <p className="text-[#64748B] dark:text-[#94A3B8]">{region.inspiration}</p>
              </div>
              <div>
                <h3 className="font-bold dark:text-white">Pokédex Count</h3>
                <p className="text-[#64748B] dark:text-[#94A3B8]">{region.pokemonCount}</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm dark:bg-[#0b1220]">
            <h3 className="font-extrabold text-[#0F172A] dark:text-white">Starter Pokémon</h3>
            <ul className="mt-3 space-y-2 text-[#64748B] dark:text-[#94A3B8]">
              {region.starters.map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm dark:bg-[#0b1220]">
            <h3 className="font-extrabold text-[#0F172A] dark:text-white">Legendary Pokémon</h3>
            <ul className="mt-3 space-y-2 text-[#64748B] dark:text-[#94A3B8]">
              {region.legendary.map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm dark:bg-[#0b1220]">
            <h3 className="font-extrabold text-[#0F172A] dark:text-white">Cities & Towns</h3>
            <ul className="mt-3 space-y-2 text-[#64748B] dark:text-[#94A3B8]">
              {region.cities.map((v) => (
                <li key={v}>• {v}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white p-5 shadow-sm lg:col-span-2 dark:bg-[#0b1220]">
            <h3 className="font-extrabold text-[#0F172A] dark:text-white">
              Notable Features & Timeline
            </h3>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <ul className="space-y-2 text-[#64748B] dark:text-[#94A3B8]">
                {region.notableFeatures.map((v) => (
                  <li key={v}>• {v}</li>
                ))}
              </ul>
              <ul className="space-y-2 text-[#64748B] dark:text-[#94A3B8]">
                {region.timeline.map((v) => (
                  <li key={v}>• {v}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
