import './App.css';
import Body from './Components/Body';
import Blogs from './Components/Blogs';
import Error from './Components/Error';import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="overflow-auto">
      <div className="bg-blue-950 dark:bg-gray-800">
        <Body/>
      </div>

    </div>
    
  );
}


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blogs",
    element: <Blogs/>
  },
  {
    path: "/",
    element: <App/>
  }, 
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);




//export default App;
