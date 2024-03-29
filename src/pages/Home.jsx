import { useEffect } from "react";
import Footer from "../components/Footer/Footer"
import HomeBanner from "../components/HomeBanner/HomeBanner"
import Navigation from "../components/Navigation/Navigation"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // If user connected, navigate to his dashboard
    if (localStorage.getItem('token') !== null || sessionStorage.getItem('token') !== null) {
      navigate('/profile')
    }
  }, []);

  return (
    <>
      <Navigation/>
      <HomeBanner/>
      <Footer/>
    </>
  )
}

export default Home