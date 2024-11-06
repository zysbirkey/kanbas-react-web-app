import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; 

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="form-control"/><br/>
      <input placeholder="password" type="password" className="form-control" /><br/>
      <input placeholder="verify password" type="password" className="form-control"/><br/>
      <Link id="wd-signup-btn" to="/Kanbas/Account/Profile" className="btn btn-primary w-100"> Sign up </Link><br />
      <Link to="/Kanbas/Account/Signin" className=" d-block mt-2">Sign in</Link>
    </div>
);}