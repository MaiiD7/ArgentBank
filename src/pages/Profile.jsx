import { useEffect } from "react"
import AccountContainer from "../components/AccountContainer/AccountContainer"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import ProfileHeader from "../components/ProfileHeader/ProfileHeader"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Profile = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.token);
  const { remember } = useSelector((state) => state.remember);

  useEffect(() => {
    // Store infos in localStorage if "Remember me" checked
    sessionStorage.setItem('test', 'test')
    if (remember) {
      localStorage.setItem('token', token);
      localStorage.setItem('remember', remember);
    } else {
      if (token !== null) {
        sessionStorage.setItem('token', token)
      }
      localStorage.removeItem('token');
      localStorage.removeItem('remember');
    }

    // If no user connected, navigate to the sign in page
    if (localStorage.getItem('token') === null && (sessionStorage.getItem('token') === null )) {
      navigate('/sign-in')
    }
  }, []);



  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', lineHeight: 1.1}}>
    <Navigation/>
    <main className="main">
      <ProfileHeader/>
      <AccountContainer/>
    </main>
    <Footer/>
  </div>
  )
  
}

export default Profile