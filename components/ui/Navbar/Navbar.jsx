import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import NavHeader from '../NavHeader'
import NavLink from '../NavLink'

const Navbar = () => {

    const [state, setState] = useState(false)
    const menuBtnEl = useRef()

    const navigation = [
        { name: "Bosu Identity Maker", href: "/#passport-generator" },
        { name: "Credits", href: "/#credits" },
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!menuBtnEl.current.contains(target)) setState(false);
        };
    }, [])

    return (
        <header className='relative'>
            <div className="custom-screen md:hidden">
                <NavHeader menuBtnEl={menuBtnEl} state={state} onClick={() => setState(!state)} />
            </div>
            <nav className={`pb-5 md:text-sm md:static md:block ${state ? "bg-gray-900 absolute z-20 top-0 inset-x-0 rounded-b-2xl shadow-xl md:bg-gray-900" : "hidden"}`}>
                <div className="custom-screen items-center md:flex">
                    <NavHeader state={state} onClick={() => setState(!state)} />
                    <div className={`items-center mt-8 text-gray-300 md:font-medium md:mt-0 md:flex md:flex-1 justify-center mr-32 ${state ? 'block' : 'hidden'} `}>
                        <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx} className="hover:text-gray-50">
                                            <Link href={item.href} className="block">
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar