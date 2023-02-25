import Header from "./Header"
import Container from "./Container"
import Metrics from "./Metrics"

const Right = () => {
    return(
        <div className= "rounded-[55px] z-30 bg-[rgb(228,241,255)]">
            <Header />
            <Container />
            <Metrics />
        </div>
    )
}

export default Right