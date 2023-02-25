const Five = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="flex justify-between items-center p-1 mx-4 mt-4">
                <p className="text-[16px] font-[600]">Feels Like</p>
                <span className="material-symbols-outlined text-white bg-[#5C9CE5] text-xl py-[1px] px-[4px] rounded-lg">
                    device_thermostat
                </span>
            </div>

            <div className=" flex flex-row justify-center items-center gap-1">
                <p className="text-xl font-[800]">30°</p>

            </div>

            <div className="flex mx-5 my-1 justify-between">
                <p className="text-xs font-[200]">0°</p>
                <p className="text-xs font-[200]">25°</p>
                <p className="text-xs font-[200]">50°</p>
            </div>

            <div className="mx-5">
                <div class="h-[10px] rounded w-[100%] bg-neutral-200 dark:bg-neutral-600">
                    <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "60%" }}></div>
                </div>
            </div>
        </div>
    )
}

export default Five