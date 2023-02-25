import ReactSpeedometer from "react-d3-speedometer";


const Odometer = () => {
    return (
        <div>
            <ReactSpeedometer
                value={10}
                maxValue={40}
                needleColor={'rgb(92,156,229)'}
                needleHeightRatio={0.4}
                labelFontSize={"10px"}
                ringWidth={15}
                valueTextFontSize={"12px"}
                currentValueText="${value}km/h"
                width={140}
                height={140}
                needleTransitionDuration={2000}
                segments={5}
            />
        </div>
    )
}

export default Odometer