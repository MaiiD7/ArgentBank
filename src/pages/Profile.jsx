import { useEffect, useState } from "react"
import AccountContainer from "../components/AccountContainer/AccountContainer"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import ProfileHeader from "../components/ProfileHeader/ProfileHeader"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import axios from "axios"

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState({});
  const { token } = useSelector((state) => state.token);
  const { remember } = useSelector((state) => state.remember);

  useEffect(() => {
    // Store infos in localStorage if "Remember me" checked
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

    // If user connected, load user informaions
    axios
    .post("http://localhost:3001/api/v1/user/profile",{}, {
        headers: {
        Authorization: 'Bearer' + token
      }
    }).then((response) => {
      setUserProfile(response.data.body)
    })

  }, []);

  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', lineHeight: 1.1}}>
    <Navigation firstName={userProfile.firstName} />
    <main className="main">
      <ProfileHeader firstName={userProfile.firstName} lastName={userProfile.lastName}/>
      <AccountContainer/>
    </main>
    <Footer/>
  </div>
  )
  
}

export default Profile