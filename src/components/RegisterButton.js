const RegisterButton = ({handleClick, text}) => {
    return (
        <button className="registerButton" onClick={handleClick}> {text} </button>
    )
}

export default RegisterButton