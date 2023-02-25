import Header from './Header';
import Location from "./Location"
import image from "../../assets/new.png"
import Temp from './Temp';


const Left = () => {
    return (
        <div style={{backgroundImage : `url(${image})`}} className="rounded-[55px] z-0  w-[135%] bg-no-repeat bg-cover bg-center">
            <div class="flex items-start flex-col justify-center my-8 mx-12 z-10 ">

                <Header />
                <Location />
                <Temp />
            </div>
        </div>

    )
}

export default Left