import { Link } from "react-router-dom";
import "./Signin.css"; 

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1 className="signin-title">Signin</h1> 
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-1"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-1"
      />
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100"
      >
        Signin
      </Link><br />
      <Link
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
        className="d-block mt-2"
      >
        Signup
      </Link>
    </div>
  );
}
