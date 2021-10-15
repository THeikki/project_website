const Password = ({type, placeholder, value, onChange }) => {
    return (
        <div>
            <label>Password</label>
            <br></br>
            <input className="inputBox" type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
)
}

export default Password