import Chart from "./Chart"
import Label from "./Label"

const Container = () => {

    const options = ["Rain precipitaion"]

    return (
        <div className="bg-white flex flex-col mx-auto rounded-3xl w-11/12 h-[35%]">
            <div className="flex my-5 mx-4 gap-70 justify-between">
                <p >Upcoming Hours</p>
                <div className="flex items-start">
                    <div className="flex items-center text-slate-500 bg-slate-200 rounded-xl pl-2 p-1 ml-1">
                        <p className=" text-xs text-slate-500">Rain precipitation</p>

                        <span class="material-symbols-outlined text-base">
                            expand_more
                        </span>
                    </div>
                    <p className="px-3 p-2 ml-1 text-xs bg-slate-200 rounded-xl">Next Days &gt;</p>
                </div>
            </div>



            <div className="flex flex-col justify-center ">
                <Label />
                <Chart />
            </div>
        </div>
    )
}

export default Container