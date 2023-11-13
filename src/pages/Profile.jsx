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
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem('token') === null && (user === null && token === null)) {
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