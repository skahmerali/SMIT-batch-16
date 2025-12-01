import { useState } from 'react';
import Button from '../../Components/Button';

export default function Home() {
  const [decreaseVal, setDecreaseVal] = useState(0);
  const handleDecrease = () => {
    setDecreaseVal(decreaseVal - 1)
  }
  return (
    <div>
      Hello world
      {decreaseVal} 
      <Button fname="ahmer" click={handleDecrease} />
      <Button fname="ali" />
    </div>
  )
}
