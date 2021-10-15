import React, { useState } from "react"
import axios from 'axios'
import Login from './components/Login';
import User from './components/User';

function App() {

  const [user, setGameStats] = useState([])
  const [showLogin, setShowLogin] = useState(true)
  const [showUser, setShowUser] = useState(true)


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
      setShowUser(true)
     
    }).catch(err => {
      console.log(err)
    })
  }

  const logout = () => {
    localStorage.clear()
    setShowLogin(true)
    setShowUser(false)
}

  return (
    <div className="content">
      <h1 className="h1" > Game statistics page </h1>
      {showLogin ? <Login onAdd={login}/> : null}  
      {showUser ? <User user={user} onClose={logout} /> : null}
    </div>
  );
}

export default App;
