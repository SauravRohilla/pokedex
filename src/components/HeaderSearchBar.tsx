import searchIcon from "../assets/images/Container.svg"
export default function HeaderSearchBar() {
    return (
        <>
            <div className="w-1/4">
                <div className="py-4 px-2 bg-[#F3F4F5] flex items-center justify-around rounded-[40px]">
                    <img src={searchIcon} alt="Search Icon" />
                    <input type="text" id='search-pokemon' class={"outline-none border-none bg-transparent"} placeholder={"Search Pokemon..."} />
                </div>
            </div>
        </>
    )
}