import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faHome, faBriefcase, faDiagramProject, faAddressCard, IconDefinition} from '@fortawesome/free-solid-svg-icons'

import {home} from "../../data";
import Container from "../../layout/container";
import {useState} from "react";

interface NavData {
    id: number,
    text: string,
    link: string,
    icon: IconDefinition
}

const navData: NavData[] = [
    {
        id: 1,
        text: "Home",
        link: '/',
        icon: faHome,
    },
    {
        id: 2,
        text: "Experience",
        link: '/experience',
        icon: faBriefcase,
    },
    {
        id: 3,
        text: "Projects",
        link: '/projects',
        icon: faDiagramProject,
    },
    {
        id: 4,
        text: "Contact Me",
        link: '/contact-me',
        icon: faAddressCard,
    }
]

const NavBar: Function = () => {

    const [showSideBar, setShowSideBar] = useState(false)

    return (
        <nav className="font-sans w-full sticky top-0 z-20 before:-z-20 before:bg-black before:opacity-20 before:absolute before:top-0 before:h-full before:w-full text-gray-50">
            <Container>
                <div className="flex py-2 sm:py-4 md:py-6 items-center justify-between">
                    <span className="text-lg sm:text-xl md:text-2xl tracking-wider uppercase">{home.name}</span>
                    <ul className="hidden lg:block list-none flex">
                        {navData.map((item, i) => (
                            <Link key={i.toString()}
                                  className="inline mx-3 text-lg font-light tracking-wider hover:text-gray-400"
                                  to={item.link}>{item.text}</Link>
                        ))}
                    </ul>
                    <div className="flex items-center">
                        <button className="text-sm md:text-base bg-white px-4 py-1.5 rounded-3xl text-black">
                            Download CV
                        </button>
                        <FontAwesomeIcon
                            icon={faBars}
                            size={"lg"}
                            className="block lg:hidden pl-5"
                            onClick={() => setShowSideBar(!showSideBar)}/>
                    </div>
                </div>
            </Container>
            {showSideBar ?
                <div className="fixed top-0">
                    <div className="h-screen w-screen bg-black opacity-70"
                        onClick={() => setShowSideBar(!showSideBar)}/>
                    <div className="h-screen absolute top-0 bg-gray-700 flex flex-col">
                        <span className="pl-5 my-4 pr-12 md:pr-20 text-2xl tracking-wider uppercase">{home.name}</span>
                        {navData.map((item, i) => (
                            <Link key={i.toString()}
                                  className="ml-5 py-2 z-20 text-lg font-light tracking-wider hover:text-gray-400 border-b hover:border-gray-400"
                                  to={item.link}
                                  onClick={() => setShowSideBar(!showSideBar)}>
                                <FontAwesomeIcon icon={item.icon} className="mr-2.5"/>
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>: <div/>}
        </nav>
    )
}

export default NavBar