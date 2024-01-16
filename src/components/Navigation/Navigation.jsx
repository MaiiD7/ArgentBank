import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { setUserToken } from "../../redux/token";

const Navigation = (props) => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(setUserToken(null))
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('remember');
    
    navigate('/sign-in')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={location.includes('profile') ? "/profile" : "/"}>
        <img
          className="main-nav-logo-image"
          src="src\assets\argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {location.includes('profile') ? (
          <div style={{display: 'flex', gap: '10px'}}>
            <Link className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faCircleUser} />
              {props.firstName}
            </Link>
            <Link className="main-nav-item" onClick={handleLogout}>
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