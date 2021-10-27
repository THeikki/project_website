import React, { useState } from "react"
import axios from 'axios'
import Login from './components/Login';
import Register from "./components/Register";
import User from './components/User';

function App() {

  const [user, setGameStats] = useState([])
  const [showRegister, setShowRegister] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showUser, setShowUser] = useState(true)

  // GET user info
  const getUserInfo = () => {
    const id = JSON.parse(localStorage.getItem("userId"))
    const token = JSON.parse(localStorage.getItem("token")) 
   
    axios.get("http://localhost:5000/api/users/" +id, {
      headers: {
        "Authorization": 'Bearer ' + token
      }
      })
      .then(res => {
        setGameStats(res.data)
        
      })
      .catch(err => {
        var alertMessage = JSON.stringify(err.response.data.message)
        alert(alertMessage)
        console.log(err.response.data.message)
      })
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

  // Register new user
  const register = ({ username, password }) => {
    const user = {
      username: username,
      password: password
    }
    
    axios.post("http://localhost:5000/api/users/register", user)
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

  // Log in user

  const login = ({ username, password }) => {
    const user = {
      username: username,
      password: password
    }
    
    axios.post("http://localhost:5000/api/users/login", user)
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

  // Log out from account
  const logout = (e) => {
    e.preventDefault()
    localStorage.clear()
    setGameStats([])
    setShowLogin(true)
    setShowUser(false)
}

// Delete user account
const deleteUser = () => {
  const id = JSON.parse(localStorage.getItem("userId"))
  const token = JSON.parse(localStorage.getItem("token")) 
 
  axios.delete("http://localhost:5000/api/users/" +id, {
    headers: {
      "Authorization": 'Bearer ' + token
    }
    })
    .then(res => {
      var alertMessage = JSON.stringify(res.data.message)
      alert(alertMessage)
      localStorage.clear()
      setGameStats([])
      setShowRegister(true)
      
    })
    .catch(err => {
      var alertMessage = JSON.stringify(err.response.data.message)
      alert(alertMessage)
      console.log(err.response.data.message)
    })
}

  return (
    <div className="content">
      <h1 className="h1" > Game statistics page </h1>
      {showRegister ? <Register onAdd={register} onPress={showLoginComponent}/> : null}
      {showLogin ? <Login onAdd={login} onPress={showRegisterComponent}/> : null}  
      {showUser ? <User user={user} onClose={logout} onDelete={deleteUser} /> : null}
    </div>
  );
}

export default App;
