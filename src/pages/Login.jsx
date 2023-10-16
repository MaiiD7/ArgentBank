import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import "../styles/main.css";

const Login = () => (
  <>
    <nav className="main-nav">
    <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="src\assets\argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      <Link className="main-nav-item" to="/sign-in">
      <FontAwesomeIcon icon={faCircleUser} />
          Sign In
        </Link>
      </div>
    </nav>
    <main className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon className="sign-in-icon" icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </>
)
  

export default Login