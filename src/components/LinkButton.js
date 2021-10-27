const LinkButton = ({handleClick, text}) => {
    return (
        <button className="linkButton" onClick={handleClick}> {text} </button>
    )
}

export default LinkButton