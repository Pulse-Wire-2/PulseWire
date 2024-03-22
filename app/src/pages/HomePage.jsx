import NavBar from "../components/NavBar"
import RenderTopStories from "../components/RenderTopStories"
import Footer from "../components/Footer"
import '../css/HomePage.css';

const HomePage = () => {

  return (
    <>
    <NavBar/>
    <div className="bannerDiv"></div>
    <RenderTopStories />
    <Footer />
    </>
  )
}

export default HomePage