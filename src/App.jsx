
import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
const [progress,setProgress] = useState(0);
const [reSolved, setResolved] = useState(0);
  return (
    <>
    <Navbar></Navbar>
    <Counter progress={progress} reSolved={reSolved}></Counter>
    <Footer></Footer>
    </>
  )
}

export default App
