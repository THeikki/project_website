import { useState } from "react"
import LoginButton from "./LoginButton"
import LinkButton from "./LinkButton"
import Password from "./Password"
import UserName from "./UserName"

const Login = ({ onAdd, onPress }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const onLogin = (e) => {
        e.preventDefault()
    
        if (!username) {
          alert("Please enter user name!")
          return
        }

        else if (!password) {
            alert("Please enter password!")
            return
        }

        onAdd({ username, password })
    
        setUsername("")
        setPassword("")
        
      }

    return (
        <div className="loginComponent">
            <h2>Login</h2>
            <UserName type="text" placeholder="User name" value={username} onChange={(e) => setUsername(e.target.value)} />   
            <Password type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />   
            <LoginButton text="Log in" handleClick={onLogin}/>
            <br></br>
            <br></br>
            <p>Do you need to register new user account?</p>
            <LinkButton text="Register here" handleClick={onPress}/>
        </div>    
    )
}

export default Login