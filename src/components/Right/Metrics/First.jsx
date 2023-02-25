
const First = () => {
    return (
        <div className="bg-white rounded-3xl h-36">
            <div className="flex justify-between items-center p-1 mx-4 mt-4">
                <p className="text-[16px] font-[600]">Humidity</p>
                <span className="material-symbols-outlined text-white bg-[#5C9CE5] text-xl py-[1px] px-[4px] rounded-lg">
                    humidity_low
                </span>
            </div>

            <div className=" flex flex-row justify-center items-center gap-1">
                <p className="text-xl font-[800]">82%</p>
                <p>bad</p>
            </div>

            <div className="m-3 flex gap-5">
                <div>
                    <p className="text-[14px] font-[200]">good</p>
                    <div class="h-[10px] rounded-full w-14 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "100%" }}></div>
                    </div>
                </div>

                <div>
                    <p className="text-[14px] font-[200]">normal</p>
                    <div class="h-[10px] rounded-full w-14 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "100%" }}></div>
                    </div>
                </div>

                <div>
                    <p className="text-[14px] font-[200]">bad</p>
                    <div class="h-[10px] rounded w-14 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "35%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default First