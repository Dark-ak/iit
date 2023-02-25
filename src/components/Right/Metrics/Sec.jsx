import Odometer from "./Odometer"

const Sec = () => {
    return (
        <div className="bg-white  rounded-3xl">
            <div className="flex justify-between items-center px-1 mx-4 mt-4">
                <p className="text-[16px] font-[600]">Wind</p>
                <span className="material-symbols-outlined text-white bg-[#5C9CE5] text-xl  px-[4px] rounded-lg">
                    air
                </span>
            </div>

            <div className=" flex justify-start mb-[-55px] ml-[53px] ">
                <Odometer />
            </div>
        </div>
    )
}

export default Sec