import { Link } from "react-router-dom";
import "./Signup.css"; 

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3 className="signup-title">Sign up</h3> 
      <input
        placeholder="username"
        className="form-control mb-1"
      />
      <input
        placeholder="password"
        type="password"
        className="form-control mb-1"
      />
      <input
        placeholder="verify password"
        type="password"
        className="form-control mb-1"
      />
      <Link
        id="wd-signup-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100"
      >
        Signup
      </Link><br />
      <Link
        to="/Kanbas/Account/Signin"
        className="d-block mt-2"
      >
        Signin
      </Link>
    </div>
  );
}
