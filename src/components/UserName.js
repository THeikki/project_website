const UserName = ({ type, placeholder, value, onChange }) => {
    return (
        <div>
            <label>User name</label>
            <br></br>
            <input className="inputBox" type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}

export default UserName