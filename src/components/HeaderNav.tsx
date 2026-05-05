export default function HeaderNav() {
    return (
        <>
            <div className="w-5/12">
                <div className="flex justify-center items-center gap-4 text-[16px] font-bold text-[#64748B]">
                    <a href="/" class={"hover:text-[#DC2626] hover:underline"}>PokeDex</a>
                    <a href="/regions" class={"hover:text-[#DC2626] hover:underline"}>Regions</a>
                    <a href="/abilities" class={"hover:text-[#DC2626] hover:underline"}>Abilities</a>
                    <a href="/items" class={"hover:text-[#DC2626] hover:underline"}>Items</a>
                </div>
            </div>
        </>
    )
}