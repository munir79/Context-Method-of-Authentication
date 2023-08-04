import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MAin from './Layout/MAin';
import Home from './Componenet/Home';
import Login from './Componenet/Login';
import Registar from './Componenet/Registar';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<MAin></MAin>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registar',
          element:<Registar></Registar>
        }
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
