export default function Button({ text, link, bgColor, fontColor }: { text: string, link: string, bgColor: string, fontColor: string }) {
    return (
        <>
            <a href={link} className={`py-3 px-8 flex w-max border-0 cursor-pointer rounded-full dark:bg-[#F8F9FA]! dark:text-[#191C1D]! transform hover:scale-105 transition`} style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}>{text}</a>
        </>
    )
}