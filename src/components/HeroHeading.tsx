export default function HeroHeading({ value, specialColoredValue, colorValue }: { value: string, specialColoredValue: string, colorValue: string }) {
    return (
        <>
            <h1 class={"text-[#191C1D] dark:text-[#fff] text-[72px] font-bold leading-none tracking-[-2px] pb-4"}>{value} <span style={{ color: colorValue }} class={"italic"}>{specialColoredValue}</span></h1>
        </>
    )
}