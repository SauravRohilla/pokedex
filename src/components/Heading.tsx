export default function Heading({ name, fontColor }: { name: string | undefined, fontColor: string }) {
    return (
        <>
            <h1 class={"uppercase text-[96px] leading-20 tracking-[-4.8px] dark:text-white!"} style={{ color: `${fontColor}` }}>{name ?? ""}</h1>
        </>
    )
}