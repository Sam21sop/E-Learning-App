import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Courses from "./Component/Courses/Courses";

function App() {

  return (
    <>
        <div className="app">
          <Navbar/>
          <Hero/>
          <Courses/>
        </div>
    </>
  )
}

export default App
