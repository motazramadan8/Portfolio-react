import React, { useEffect, useState } from "react";

// Libraries
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'

// components
import Home from './Home'
import Projects from './Projects'

// My CSS
import './App.css'
const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  }, [])

  return (
    <BrowserRouter>
    {loading ?
      <div className="preloaderr">
        <ScaleLoader color={"#f87765"} loading={loading} height={100} margin={10} />
      </div> :

    <>
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Projects' element={<Projects />}/>
       </Routes>

    </>   
    }
    </BrowserRouter>
  )
}

export default App
