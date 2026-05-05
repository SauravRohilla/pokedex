export default function SubHeadingH3({ name, fontSize }: { name: string | undefined, fontSize: string }) {
    return (
        <>
            <h3 style={{ fontSize: `${fontSize}` }} class={"capitalize dark:text-white"}>{name}</h3>
        </>
    )
}