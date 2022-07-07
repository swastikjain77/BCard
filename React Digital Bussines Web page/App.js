import React from "react"

import Info from "./components/Info"
import About from "./components/About"
import Like from "./components/Like"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="container" >
            <Info/>
            <About/>
            <Like/>
            <Footer/>
        </div>
    )    
}