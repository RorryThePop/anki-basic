import './App.css'
import Header from "./Components/Header/Header.jsx";
import {Outlet} from "react-router-dom";
function App() {

  return (
    <>
      <Header/>
        <main className='main'>
            <section>
                <h2>Туториал анки</h2>
            </section>
        </main>
    </>
  )
}

export default App
