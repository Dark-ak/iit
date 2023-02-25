import First from "./Metrics/First"
import Sec from "./Metrics/Sec"
import Third from "./Metrics/Third"
import Four from "./Metrics/Four"
import Five from "./Metrics/Five"
import Six from "./Metrics/Six"

const Metrics = () => {
    return (
        <div className="mx-8 mt-6">
            <p className="font-[800] text-sm">More details on today's weather</p>
            <div className="grid grid-cols-3 grid-rows-2 gap-8 mt-5">
                <First />
                <Sec />
                <Third />
                <Four />
                <Five />
                <Six />
            </div>
        </div>
    )
}

export default Metrics