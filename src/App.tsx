import CategoriesPreview from "./components/CategoriesPreview"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

function App() {
  return (
    <div>
      <Hero/>
     {/* <Navbar/> */}
     <Products/>
     <CategoriesPreview/>
    </div>
  )
}

export default App
