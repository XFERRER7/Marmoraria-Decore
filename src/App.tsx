import { About } from "./components/About"
import { Catalog } from "./components/Catalog"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Line } from "./components/Line"
import { Projects } from "./components/Projects"

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Line/>
      <Projects/>
      <Line/>
      <Catalog/>
      <Line/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
