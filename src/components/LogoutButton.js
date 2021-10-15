const LogoutButton = ({handleClick, text}) => {
    return (
        <button className="logoutButton" onClick={handleClick}> {text} </button>
    )
}

export default LogoutButton