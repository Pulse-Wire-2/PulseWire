import NavBar from "../components/NavBar"
import RenderTopStories from "../components/RenderTopStories"
import Footer from "../components/Footer"
import '../css/HomePage.css';

const HomePage = () => {

  return (
    <>
    <NavBar/>
    <h1 className="homeh1">Top Stories Today</h1>
    <RenderTopStories />
    <Footer />
    </>
  )
}

export default HomePage