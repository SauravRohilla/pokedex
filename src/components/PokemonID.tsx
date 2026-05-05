export default function PokemonID({ fontSize, id, fontColor }: { fontSize: string, id: number | undefined, fontColor: string }) {
    return (
        <>
            <h3 class={"uppercase dark:text-[#64748B]"} style={{ fontSize: `${fontSize}`, color: `${fontColor}` }}>#{id}</h3>
        </>
    )
}