import './App.css'
import Header from "./Components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
function App() {

  return (
    <>
      <Header/>
        <main className='main'>
            <Outlet />
        </main>
    </>
  )
}

export default App
