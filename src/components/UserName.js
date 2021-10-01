const UserName = ({ type, placeholder, value, onChange }) => {
    return (
        <div>
            <label>Username</label>
            <br></br>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    )
}

export default UserName