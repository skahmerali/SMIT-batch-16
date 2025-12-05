

export default function DecreaseBtn({decreaseButton, name}) {
   
  return (
    <button onClick={decreaseButton}>
      {name}
    </button>
  )
}
