import Header from "../components/Header"
import { useEffect, useState } from "preact/hooks"

type ResourceItem = { name: string; url: string }

export default function Items() {
    const [items, setItems] = useState<ResourceItem[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchItems() {
            const res = await fetch('https://pokeapi.co/api/v2/item?limit=120')
            const data = await res.json()
            setItems(data.results)
            setLoading(false)
        }
        fetchItems()
    }, [])

    return (
        <>
            <Header />
            <div className="bg-[#F8f9fb] dark:bg-[#121212] min-h-screen py-12 px-4">
                <div className="container m-auto">
                    <h1 className="text-4xl font-semibold text-[#0F172A] dark:text-white">Items</h1>
                    <p className="mt-2 text-[#64748B] dark:text-[#CBD5E1]">In-world utility items and held equipment.</p>
                    {loading ? <p className="mt-8">Loading...</p> : (
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {items.map((item) => <div key={item.name} className="rounded-2xl bg-white dark:bg-[#1D2122] p-4 capitalize">{item.name.replaceAll('-', ' ')}</div>)}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
