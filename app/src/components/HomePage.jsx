import NavBar from "./NavBar"
import RenderTopStories from "./RenderTopStories"

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