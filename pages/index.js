import React from "react";
import { useContext } from "react";
import { Context } from "../context";
import  { useRouter } from "next/router";

import axios from "axios";




export default function Auth() {
  const{username,setUsername,secret, setSecret} = useContext(Context)
  const router = useRouter()


  const onSubmit =(e)=>{
    e.preventDefault()
    if(username.length === 0 || secret.length === 0) return

    axios.put('https://api.chatengine.io/users/',
    {username,secret},
    {headers: {"Private-key": "995c61f2-672a-4c12-92c5-1917fd0dcf62"}}
    
    ).then(r => router.push("/chats"))

  }




  return ( 
  <div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth-title">
          Chat App
        </div>
        <div className="input-container">
          <input className="text-input" 
          type="text" placeholder="Email"
          onChange={(e) => setUsername(e.target.value)}
           />


        </div>
        <div className="input-container">
          <input className="text-input"
          type="password" placeholder="Password"
          onChange={(e) => setSecret(e.target.value)}
            />
        </div>
        <button type="submit" className="submit-button">
          Login/ Sign Up
        </button>
        </form>
      </div>
  
  </div>
  

  )
}

