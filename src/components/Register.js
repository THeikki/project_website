import { useState } from "react"

const Register = ({ onSet, onPress }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const onRegister = (e) => {
        e.preventDefault()
    
        if (!username) {
          alert("Please give user name!")
          return
        }

        else if (!password) {
            alert("Please give password!")
            return
        }

        onSet({ username, password })
    
        setUsername("")
        setPassword("")
        
      }

    return (
       
        <div className="registerComponent">
            <h2>Register</h2>
            <div>
                <label>User name</label>
                <br></br>
                <input className="inputBox" type="text" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Password</label>
                <br></br>
                <input className="inputBox" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div> 
            <button className="registerButton" onClick={onRegister}> Register </button>
            <br></br>
            <br></br>
            <p>If you are registered already, please</p>
            <button className="linkButton" onClick={onPress}> Log in here </button>
        </div>        
    )
}

export default Register