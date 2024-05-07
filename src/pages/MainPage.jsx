import NavBar from "../components/NavBar"
import SearchConvo from "../components/SearchConvo"

function MainPage() {
  return (
    <div className="overflow-hidden">
        <div className="flex h-screen">
            <div className="w-[72px] bg-[#1e1f22]">
                <NavBar />
            </div>
            <div className="w-[240px] bg-[#2b2d31]">
                <SearchConvo />
            </div>
            <div className="">
                Hello
            </div>
        </div>
    </div>
  )
}

export default MainPage