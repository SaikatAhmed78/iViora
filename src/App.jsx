import gsap from "gsap"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import ProduceFrame from "./sections/ProduceFrame"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ProduceFrame/>
    </>
  )
}


export default App