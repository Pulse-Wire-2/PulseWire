import NavBar from "../components/NavBar"
import RenderTopStories from "../components/RenderTopStories"

const HomePage = () => {

  return (
    <>
    <NavBar/>
    <h1>Hello ...</h1>
    <h2>Top Stories Today</h2>
    <RenderTopStories />
    </>
  )
}

export default HomePage