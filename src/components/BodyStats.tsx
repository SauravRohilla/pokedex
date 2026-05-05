import SubHeadingH3 from "./SubHeadingH3";

export default function BodytStats({ height, weight, category }: { height: number, weight: number, category: string }) {
    return (
        <>
            <div className="flex item-center justify-baseline gap-10">
                <div className="">
                    <p class={"uppercase text-[12px] tracking-[1.2px] text-[#94A3B8]"}>Height</p>
                    <SubHeadingH3 fontSize="24px" name={height as unknown as string} />
                    <span class={"text-[12px] text-[#94A3B8]"}>metres</span>
                </div>
                <div className="">
                    <p class={"uppercase text-[12px] tracking-[1.2px] text-[#94A3B8]"}>Weight</p>
                    <SubHeadingH3 fontSize="24px" name={weight as unknown as string} />
                    <span class={"text-[12px] text-[#94A3B8]"}>kg</span>
                </div>
                <div className="">
                    <p class={"uppercase text-[12px] tracking-[1.2px] text-[#94A3B8]"}>Category</p>
                    <SubHeadingH3 fontSize="24px" name={category} />
                </div>
            </div>
        </>
    )
}