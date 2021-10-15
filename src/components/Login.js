import { useState } from "react"
import LoginButton from "./LoginButton"
import Password from "./Password"
import UserName from "./UserName"

const Login = ({ onAdd }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const onLogin = (e) => {
        e.preventDefault()
    
        if (!username) {
          alert("Please enter username!")
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
        <>
            <h1>Login</h1>
            <UserName type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />   
            <Password type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />   
            <LoginButton text="Log in" handleClick={onLogin}/>
        </>    
    )
}

export default Login