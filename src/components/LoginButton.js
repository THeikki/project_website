const LoginButton = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}> {text} </button>
    )
}

export default LoginButton