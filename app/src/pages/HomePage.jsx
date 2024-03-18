import NavBar from "../components/NavBar"
import RenderTopStories from "../components/RenderTopStories"

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