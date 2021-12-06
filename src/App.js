import React, { useState } from "react"
import axios from 'axios'
import Login from './components/Login';
import Register from "./components/Register";
import User from './components/User';

function App() {

  const [user, setUserStats] = useState([])
  const [showRegister, setShowRegister] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showUser, setShowUser] = useState(true)
  
  // Get user info

  const getUserInfo = () => {

    const id = JSON.parse(localStorage.getItem("userId"))
    const token = JSON.parse(localStorage.getItem("token")) 
    
    axios.get("https://project-game-api.herokuapp.com/api/users/" +id, {
      headers: {
        "Authorization": 'Bearer ' + token
      }
      })
      .then(res => {
        setUserStats(res.data)
        
      })
      .catch(err => {
        var alertMessage = JSON.stringify(err.response.data.message)
        alert(alertMessage)
        console.log(err.response.data.message)
      })
  }
 
  // Log in user

  const login = ({username, password}) => {
    const user = {
      username: username,
      password: password
    }
     
    axios.post("https://project-game-api.herokuapp.com/api/users/login", user)
    .then(res => {
      var alertMessage = JSON.stringify(res.data.message)
      var token = JSON.stringify(res.data.token)
      var id = JSON.stringify(res.data.id)
      
      if(alertMessage) {
        alert(alertMessage)
        localStorage.removeItem(token)
      } 
     
      localStorage.setItem("token", token)
      localStorage.setItem("userId", id)
      console.log(token)
      console.log(id)

      getUserInfo()

      setShowLogin(false)
      setShowRegister(false)
      setShowUser(true)
     
    }).catch(err => {
      console.log(err)
     
    })
  }

  // Register new user

  const register = ({ username, password }) => {
    const user = {
      username: username,
      password: password
    }
    
    axios.post("https://project-game-api.herokuapp.com/api/users/register", user)
    .then(res => {
      var alertMessage = JSON.stringify(res.data.message)
      
      if(alertMessage) {
        alert(alertMessage)
        console.log(alertMessage)
      }     
    }).catch(err => {
      console.log(err)
      
    })
  }

  // Delete user account

  const deleteUser = () => {
    const id = JSON.parse(localStorage.getItem("userId"))
    const token = JSON.parse(localStorage.getItem("token")) 
  
    axios.delete("https://project-game-api.herokuapp.com/api/users/" +id, {
      headers: {
        "Authorization": 'Bearer ' + token
      }
      })
      .then(res => {
        var alertMessage = JSON.stringify(res.data.message)
        alert(alertMessage)
        localStorage.clear()
        setUserStats([])
        setShowRegister(true)
        
      })
      .catch(err => {
        var alertMessage = JSON.stringify(err.response.data.message)
        alert(alertMessage)
        console.log(err.response.data.message)
      })
  }

  // Log out from account

  const logout = (e) => {
    e.preventDefault()
    localStorage.clear()
    setUserStats([])
    setShowLogin(true)
    setShowUser(false)
  }

  // Hide login component

  const showLoginComponent = (e) => {
    e.preventDefault()
    setShowLogin(true)
    setShowRegister(false)
  }

  // Hide register component

  const showRegisterComponent = (e) => {
    e.preventDefault()
    setShowLogin(false)
    setShowRegister(true)
  }

  //TESTI

  return (
    <div>
      <div className="content">
        {showRegister ? <Register onAdd={register} onPress={showLoginComponent}/> : null}
        {showLogin ? <Login onSet={login} onPress={showRegisterComponent}/> : null}  
        {showUser ? <User user={user} onClose={logout} onDelete={deleteUser} /> : null}
      </div>
    </div>
    
    
  )
}

export default App;
