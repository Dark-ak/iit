import Left from "./Left/Left"
import Right from "./Right/Right"

const Content = () => {
    return(
        <div className="grid grid-flow-col grid-cols-[26%_74%] rounded-[55px] min-h-[900px] min-w-[1200px]">
            <Left />
            <Right />
        </div>
    )
}

export default Content