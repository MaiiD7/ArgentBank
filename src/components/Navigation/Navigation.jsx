import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

const Navigation = () => {
  const location = useLocation().pathname;

  return (
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
        {location.includes('user') ? (
          <div style={{display: 'flex', gap: '20px'}}>
            <Link className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faCircleUser} />
              Tony
            </Link>
            <Link className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          </div> 
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
        
      </div>
    </nav>
  )
  
}

export default Navigation