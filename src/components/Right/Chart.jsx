import { AreaChart, Area, XAxis, YAxis, ReferenceLine } from 'recharts';


const data = [
    { name: '23%', uv: 23},
    { name: '29%', uv: 29},
    { name: '58%', uv: 58},
    { name: '75%', uv: 75},
    { name: '33%', uv: 33},
    { name: '20%', uv: 20},
    { name: '73%', uv: 73},
    { name: '49%', uv: 49},

];


const Chart = () => {


    return (
        <div>
            <AreaChart width={750} height={125} data={data}>
                <XAxis dataKey="name"  />
                <YAxis domain={[0,100]} tick ={false} /> 
                
 
                <Area type="monotone-x" dataKey="uv" stroke="#5C9CE5" fill="#5C9CE5" fillOpacity={1} isFront={true}/>
                {data.map((entry, index) => (
                    <ReferenceLine key={`reference-line-${index}`} x={entry.name} stroke="black" strokeWidth={2}/>
                ))}
            </AreaChart>
        </div>
    )
}

export default Chart 