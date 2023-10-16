import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/main.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

const Login = () => (
  <>
    <Navigation/>
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon className="sign-in-icon" icon={faCircleUser} />
        <h1>Sign In</h1>
        <Form/>
      </section>
    </main>
    <Footer/>
  </>
)

export default Login