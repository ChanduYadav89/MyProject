import BrowseEvent from '../pages/BrowseEvent'
import CreateEvents from "../pages/CreateEvents"
import MyEvents from "../pages/Myevents"
import About from "../pages/About"
const AppLayout = () => {
  return (
    <>
      <BrowseEvent />
      <CreateEvents />
      <MyEvents />
      <About />

    </>
  )
}

export default AppLayout
