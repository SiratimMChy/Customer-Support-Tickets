
import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import { Suspense } from 'react'

const ticketPromise = fetch('tickets.json')
  .then(res => res.json());


function App() {
  const [progress, setProgress] = useState(0);
  const [reSolved, setResolved] = useState(0);
  return (
    <>
      <Navbar></Navbar>
      <Counter progress={progress} reSolved={reSolved}></Counter>
      <Suspense fallback={<h4>Data is loading </h4>}>
        <Card ticketPromise={ticketPromise} setProgress={setProgress} setResolved={setResolved}></Card>

      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
