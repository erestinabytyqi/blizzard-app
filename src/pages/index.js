import * as React from "react"
import '../style/page.css';
import Navbar from "../components/Navbar";
const IndexPage = () => {
  const [darkMode,setDarkMode]=React.useState('false');

  React.useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  
  return (
    <>
    <div className="navbar_border">
      <Navbar/>
    </div>
    <div className="hero" id="home">

    </div>
    <div className="services_general" id="services">

    </div>
    <div className="about_us" id="about">

    </div>
    <div className="technologies" id="tech">

    </div>
    <div className="contact_us" id="contact"> 

    </div>
    <div className="footer dark:bg-slate-800 bg-slate-200">

    </div>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
