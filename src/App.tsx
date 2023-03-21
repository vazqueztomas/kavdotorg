import CategoriesPreview from "./components/CategoriesPreview"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stats from "./components/Stats"
import StatsSimples from "./components/StatsSimples"

function App() {
  return (
    <div>
      <Hero/>
     {/* <Navbar/> */}
     <Features/>
     <Products/>
     <Stats/>
     <StatsSimples/>
     <CategoriesPreview/>
    </div>
  )
}

export default App
