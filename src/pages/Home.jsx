import { useEffect } from "react";
import Footer from "../components/Footer/Footer"
import HomeBanner from "../components/HomeBanner/HomeBanner"
import Navigation from "../components/Navigation/Navigation"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.token);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (localStorage.getItem('user') !== null || (user !== null && token !== null)) {
      navigate('/user')
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