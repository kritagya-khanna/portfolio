
import './App.css'
import Navbar from './Navbar.tsx'
import SocialMedia from './SocialMedia.tsx'

function App() {
 
  return (
    <>
    <div className="wraper">
      <Navbar/>
      <div className="container">
        <div className="left">
          <p className="hello">HELLO, MY NAME IS</p>
          <h1 className="name">KRITAGYA <br /> KHANNA</h1>
          <p className="about"> I'M AN ENGINEERING STUDENT <br /> MAJORING IN INFORMATION TECHNOLOGY</p>
          <SocialMedia/>
        </div>
        
        <div className="right">
          <div className="image">
            <img src="src\assets\me-removebg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <hr />

    </>
  )
}

export default App
