import { useState } from "react"
import RegisterButton from "./RegisterButton"
import LinkButton from "./LinkButton"
import Password from "./Password"
import UserName from "./UserName"

const Register = ({ onAdd, onPress }) => {

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

        onAdd({ username, password })
    
        setUsername("")
        setPassword("")
        
      }

    return (
        <div className="registerComponent">
            <h2>Register</h2>
            <UserName type="text" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />   
            <Password type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />   
            <RegisterButton text="Register" handleClick={onRegister}/>
            <br></br>
            <br></br>
            <p>If you are registered already, please</p>
            <LinkButton text="Login here" handleClick={onPress}/>
        </div>    
    )
}

export default Register