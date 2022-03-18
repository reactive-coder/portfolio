import { Component } from 'react'
import {Helmet} from "react-helmet"

import {Routes, Route } from 'react-router-dom'


import Home from "../components/home/home";
import NavBar from "../components/navbar/NavBar";

interface RouteData {
    id: number,
    text: string,
    link: string,
    component: JSX.Element
}

const routeData: RouteData[] = [
    {
        id: 1,
        text: "Home",
        link: '/',
        component: <Home/>
    },
    {
        id: 2,
        text: "Experience",
        link: '/experience',
        component: <Home/>
    },
    {
        id: 3,
        text: "Projects",
        link: '/projects',
        component: <Home/>
    },
    {
        id: 4,
        text: "Contact Me",
        link: '/contact-me',
        component: <Home/>
    }
]


class App extends Component {

    render() {
        return (
            <div className="bg-gray-900" id="particle-js">
                <Helmet>
                    <title>Devarsh Patel</title>
                </Helmet>

                <NavBar/>
                <Routes>
                    {routeData.map((item, i) => (
                        <Route
                            key={i}
                            path={item.link}
                            element={item.component}/>
                    ))}
                </Routes>
            </div>
        )
    }
}

export default App