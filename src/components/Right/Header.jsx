import profile from "../../assets/profile.jpg"

const Header = () => {
    return (
        <div className="m-10 flex justify-between">
            <div>
                <p className="font-[600] mb-1">Welcome back Mark!</p>
                <p className="font-[500] text-xs ">Check out today's weather information</p>
            </div>

            <div className="flex gap-3 items-center">
                <span class="material-symbols-outlined">
                    more_horiz
                </span>
                <img src={profile} alt="" className=" h-9 w-15 rounded-3xl" />
            </div>
        </div>
    )
}

export default Header