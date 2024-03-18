import {useState} from "react";
import Button from "./components/Button"


const Title =({title}) => {
    return (
        <h1>{title}</h1>
    )
}
const Statistics =({statics}) => {
    if (statics.total === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback data</p>
            </div>
        )}return (
        <div>
            <h2>Statistics</h2>
            <table>
                <StatisticLine text='yeah' value={statics.yeah}/>
                <StatisticLine text='kinda' value={statics.kinda}/>
                <StatisticLine text='nah' value={statics.nah}/>
                <StatisticLine text='total' value={statics.total}/>
                <StatisticLine text='Average' value={((statics.yeah-statics.nah)/statics.total).toFixed(2)}></StatisticLine>
                <StatisticLine text='Good days ratio' value={(statics.yeah/statics.total)*100}>%</StatisticLine>
            </table>
        </div>
    )
}
const StatisticLine=({text,value}) => {
    return (
        <tbody>
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
        </tbody>
    )
}

function Display ({text,number=0}) {
    return (
        <p>{text} {Math.abs(number)}</p>
    )
}
const App = () => {
    const [yeah,setYeah] = useState(0)
    const [nah,setNah] = useState(0)
    const[kinda,setKinda] = useState(0)
    const[total,setTotal] = useState(0)
    const [statics, setStatics] = useState({
        yeah: 0,
        kinda: 0,
        nah: 0,
        total: 0
    })
    const IncrYeah = () =>{
        setStatics({
            ...statics,
            yeah: statics.yeah + 1,
            total: statics.total +1
        })
    }
    const IncrNah = () => {
        setStatics({
            ...statics,
            nah: statics.nah + 1,
            total: statics.total +1
        })
    }
    const IncrKinda = () => {
        setStatics({
            ...statics,
            nah: statics.kinda + 1,
            total: statics.total + 1
        })
    }
    return (
        <div>
            <Title title='Did you have a good study day today?'/>
            <Button text='yeah' onClick={IncrYeah}/>
            <Button text='kinda' onClick={IncrKinda}/>
            <Button text='nah' onClick={IncrNah}/>

            <Title title='Results'/>
            <Statistics statics={statics}/>

        </div>
    )
}

export default App
