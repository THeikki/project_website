//import './App.css';
import React, { useState } from "react"
import axios from 'axios'
import Login from './components/Login';
import StatsButton from './components/StatsButton';
import User from './components/User';

function App() {

  const [user, setGameStats] = useState([])

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
        localStorage.removeItem()
      }
     
      localStorage.setItem("token", token)
      localStorage.setItem("userId", id)
      console.log(token)
      console.log(id)
     
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <Login onTesti={login}/>
      <h2>Player statistics</h2>
      <User user={user}/>
      <StatsButton text="Get player stats" handleClick={getUserInfo}/>
    </div>
  );
}

export default App;
