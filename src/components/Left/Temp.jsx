
const Temp = () => {
    return (
        <div>
            <div className="flex items-center text-white ml-3 mt-10">
                <p className="mr-3 text-2xl">&lt;</p>
                <p className="text-8xl">27°</p>
                <p className="text-2xl">&gt;</p>
            </div>
            <div className="text-white flex items-center ml-12 ">
                <span className="material-symbols-outlined">
                    wb_sunny
                </span>
                <p className="text-lg">Sunny</p>
            </div>
        </div>
    )
}

export default Temp;