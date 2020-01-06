
import React from "react";
const Login = () => {

  let divStyle ={
    maxWidth: '275px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  }
  return (
      <div style={divStyle}>
      <form className="form-signin" action=" http://localhost:3001/admin" method="post">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputEmail" className="sr-only">Username</label>
      <input type="username" id="username"  name='username' className="form-control" placeholder="username" required="" autoFocus=""></input>
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input type="password" id="inputPassword" name='password' className="form-control" placeholder="Password" required=""></input>
      <button className="btn btn-sm btn-primary btn-block" type="submit" value='Submit'>Sign in</button>
    </form>
    </div>
   
  );
};

export default Login;

