import { useState } from "react"
import LoginButton from "./LoginButton"
import Password from "./Password"
import UserName from "./UserName"

const Login = ({ onTesti }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

        onTesti({ username, password })
    
        setUsername("")
        setPassword("")
        
      }

    return (
        <>
            <UserName type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />   
            <Password type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />   
            <LoginButton text="Login" handleClick={onLogin}/>
        </>    
    )
}

export default Login