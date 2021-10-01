const StatsButton = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}> {text} </button>
    )
}

export default StatsButton