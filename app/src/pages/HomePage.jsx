import NavBar from "../components/NavBar"
import RenderTopStories from "../components/RenderTopStories"

const HomePage = () => {

  return (
    <>
    <NavBar/>
    <h2>Top Stories Today</h2>
    <RenderTopStories />
    </>
  )
}

export default HomePage