const LoginButton = ({handleClick, text}) => {
    return (
        <button className="loginButton" onClick={handleClick}> {text} </button>
    )
}

export default LoginButton