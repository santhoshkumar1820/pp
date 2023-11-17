
import {Home1,AboutUs,ContactUs,Products,Services,Navbar,Testimonials,Footer} from "./components"

import "./index.css"
function App() {

  return (
  
    <div className="flex flex-col bck h-screen">
      <Navbar />
      <div className="p-4 flex-grow  ">
        <Home1 />
        <AboutUs />
        <Products />
        <Services />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>

  )
}

export default App
