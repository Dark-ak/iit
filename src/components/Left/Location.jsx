import sunr from "../../assets/sunrise.png"
import suns from "../../assets/sunset.png"



const Location = () => {
    return (
        <div className="flex items-center gap-5">
            <div className="mt-10 text-white flex flex-col" >
                <div className="flex items-center gap-2">
                    <span class="material-symbols-outlined text-2xl">
                        near_me
                    </span>
                    <p>New York, USA</p>
                </div>
                <div>
                    <p>Today, 28 sep</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="text-white flex items-center gap-1">
                    <img src={sunr} alt="" className="w-5" />
                    <p className="text-xs">07:19</p>
                </div>
                <div className="text-white flex items-center gap-1">
                    <img src={suns} alt="" className="w-5" />
                    <p className="text-xs">19:32</p>
                </div>
            </div>
        </div>
    )
}

export default Location