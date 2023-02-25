

const Four = () => {
    return (
        <div className="bg-white rounded-3xl">
            <div className="flex justify-between items-center p-1 mx-4 mt-4">
                <p className="text-[16px] font-[600]">UV index</p>
                <span className="material-symbols-outlined text-white bg-[#5C9CE5] text-xl py-[1px] px-[4px] rounded-lg">
                    sunny
                </span>
            </div>

            <div className=" flex flex-row justify-center items-center gap-1">
                <p className="text-xl font-[800]">4 </p>
                <p>medium</p>
            </div>

            <div className="m-3 flex gap-2">
                <div>
                    <p className="text-[12px] font-[200]">0-2</p>
                    <div class="h-[10px] rounded-full w-9 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "100%" }}></div>
                    </div>
                </div>

                <div>
                    <p className="text-[12px] font-[200]">3-5</p>
                    <div class="h-[10px] rounded-full w-9 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "50%" }}></div>
                    </div>
                </div>

                <div>
                    <p className="text-[12px] font-[200]">6-7</p>
                    <div class="h-[10px] rounded-full w-9 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "0%" }}></div>
                    </div>
                </div>

                <div>
                    <p className="text-[12px] font-[200]">8-10</p>
                    <div class="h-[10px] rounded-full w-9 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "0%" }}></div>
                    </div>
                </div>

                <div>
                    <p className="text-[12px] font-[200]">11+</p>
                    <div class="h-[10px] rounded-full w-9 bg-neutral-200 dark:bg-neutral-600">
                        <div class="bg-[#5C9CE5] h-[100%] rounded-full" style={{ width: "0%" }}></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Four