import { useState } from 'react'
import IncreaseBtn from '../../Components/IncreaseBtn';
import DecreaseBtn from '../../Components/DecreaseBtn';

export default function CounerResult() {
  const [count, setCount] = useState(0);
  const handledecrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div>
      result : {count}
      <IncreaseBtn handleIncrease={() => setCount(count + 1)} name="+" />
      <DecreaseBtn decreaseButton={handledecrease}
        name="-" />
    </div>
  )
}
