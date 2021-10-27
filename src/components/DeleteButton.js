const DeleteButton = ({handleClick, text}) => {
    return (
        <button className="deleteButton" onClick={handleClick}> {text} </button>
    )
}

export default DeleteButton