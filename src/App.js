import React, {Component} from "react"
import Routing from "./ReactRoute/Routing"
import NavBar from "./NavAndFoot/NavBar"
import Banner from './NavAndFoot/Banner'
import Footer from "./NavAndFoot/Footer"


class App extends Component {

    render() {
        return (<>
            <NavBar/>
            <Banner/>
            <Routing/>
            <Footer/>
        </>)

    }
}

export default App
