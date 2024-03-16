import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Courses from "./Component/Courses/Courses";
import Details from "./Component/Details/Details";
import Learn from "./Component/Learn/Learn";
import Chapter from "./Component/Chapter/Chapter";
import Page404 from "./Component/Page404/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  // create browser router
  const browserRouter = createBrowserRouter([
    {
      path:'/',
      element: <Navbar/>,
      errorElement: <Page404/>,
      children:[
        {
          path:'', 
          element:<Hero/> 
        },
        {
          path:'/courses',
          children:[
            {
              path:'',
              element:<Courses/>
            },
            {
              path:`:courseId`,
              element:<Details/>
            }
          ]
        },
        {
          path:'/learn/:courseId',
          element: <Learn/>,
          children:[
            {
              path:'chapter/:chapterId', element:<Chapter/>
            }
          ]
        }
      ]
    }
  ])

  return (
    <>
        <RouterProvider router={browserRouter}/>
    </>
  )
}

export default App
