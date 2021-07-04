import React from 'react';
import {useHistory}  from 'react-router-dom';


function Login() {
    let history = useHistory();

    return (
      <div>
          <input type="text" required></input>
          <input type="text" placeholder="password" required></input>
          <button 
          onClick={()=>{history.push("/home");
          }}>Login
          </button>
      </div>
    );
  }
  
  export default Login;