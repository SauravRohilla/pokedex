export default function SubHeadingH4({ name, fontSize }: { name: string | undefined, fontSize: string }) {
    return (
        <>
            <h4 style={{ fontSize: `${fontSize}` }} class={"capitalize dark:text-white"}>{name}</h4>
        </>
    )
}