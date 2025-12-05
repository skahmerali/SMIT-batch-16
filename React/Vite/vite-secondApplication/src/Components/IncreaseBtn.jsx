

export default function IncreaseBtn({handleIncrease, name}) {
   

    return (
        <button onClick={handleIncrease}>
            {name}
        </button>
    )
}
