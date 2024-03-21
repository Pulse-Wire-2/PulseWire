import NavBar from "../components/NavBar"
import RenderTopStories from "../components/RenderTopStories"
import '../css/HomePage.css';

const HomePage = () => {

  return (
    <>
    <NavBar/>
    <h1>Top Stories Today</h1>
    <RenderTopStories />
    </>
  )
}

export default HomePage