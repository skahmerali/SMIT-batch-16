import { useState } from 'react'
import Button from '../../Components/Button';


export default function About() {
    const [addVal, setAddVal] = useState(0);
    const handleAdd = () => {
        setAddVal(addVal + 1)
    }
    return (
        <div>
            {addVal}
            {/* <button onClick={() => { setAddVal(addVal + 1) }
            }>add</button> */}
            <Button name="sheikh"
                click={handleAdd} />
        </div>
    )
}
