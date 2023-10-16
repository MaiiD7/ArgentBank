import AccountContainer from "../components/AccountContainer/AccountContainer"
import Footer from "../components/Footer/Footer"
import Navigation from "../components/Navigation/Navigation"
import ProfileHeader from "../components/ProfileHeader/ProfileHeader"

const Profile = () => (
  <>
    <Navigation/>
    <main className="main bg-dark">
      <ProfileHeader/>
      <AccountContainer/>
    </main>
    <Footer/>
  </>
)

export default Profile