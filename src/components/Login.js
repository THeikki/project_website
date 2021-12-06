import { useState } from "react"

const Login = ({ onSet, onPress }) => {

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

        onSet({ username, password })
    
        setUsername("")
        setPassword("")
        
      }
    
      //TESTI
      //TESTI
    return (
        <div className="background_image">
            <div className="loginComponent">
                <h2>Login</h2>
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
                
                <button className="loginButton" onClick={onLogin}> Log in </button>
                <br></br>
                <br></br>
                <p>Do you need to register new user account?</p>
                <button className="linkButton" onClick={onPress}> Register here </button>
            </div>    

        </div>
        
    )
}

export default Login