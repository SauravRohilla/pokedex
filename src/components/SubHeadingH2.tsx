export default function SubHeadingH2({ name, fontSize }: { name: string | undefined, fontSize: string }) {
    return (
        <>
            <h2 style={{ fontSize: `${fontSize}` }} class={"mb-4 tracking-[-3px] leading-15 capitalize dark:text-white"}>{name}</h2>
        </>
    )
}