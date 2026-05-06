import type { PokemonStats } from "../types/apiDataTypes"
export default function StatWithProgressBar({ stats, type, bgColor, text, width, showNumbers, numbers }: { stats: PokemonStats[] | undefined, type: string, bgColor: string, text: string, width: string, showNumbers: boolean, numbers: number }) {
    const neededStat: PokemonStats | undefined = stats?.find((item: PokemonStats) =>
        item?.stat?.name === type
    )

    const value: number = ((neededStat?.base_stat ?? 0) / 255) * 100;
    const bgStyle: { backgroundImage: string } | { backgroundColor: string } = bgColor.includes("gradient") ? { backgroundImage: bgColor } : { backgroundColor: bgColor };

    return (
        <>
            <div className="" style={{ width: `${width}` }}>
                {showNumbers ?
                    <div className="flex items-center justify-between">
                        <p class={"uppercase text-[#94A3B8]"}>{text}</p>
                        <p class=" text-[#475569] text-[14px] font-bold"><span class={"text-[20px] text-black dark:text-[#475569]"}>{numbers}</span>/255</p>
                    </div>
                    :
                    <p class={"uppercase text-[#94A3B8]"}>{text}</p>
                }
                <div class={"h-1.5 rounded-full mt-2 bg-[#E1E3E4] w-full relative overflow-hidden border-0"}>
                    <div className={`h-full rounded-full absolute left-0 top-0 border-0`} style={{ width: `${value}%`, ...bgStyle }}></div>
                </div>
            </div >
        </>
    )
}