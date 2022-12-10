import { useState } from 'react'
import '../styles/nav.css'
import hamMenuIcon from '../media/ham-menu.png'
import crossIcon from '../media/cross.png'

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='primary-nav'>
            <img src={hamMenuIcon} id="menu-btn" onClick={() => setShowMenu(true)} />
            <h1 className='heading'>FAKES<span className='red'>.</span><span className='small'>com</span></h1>
            <div className={`links ${showMenu && "showmenu"}`}>
                <div className={`link-list`}>
                <img src={crossIcon} onClick={() => setShowMenu(false)} />
                    <a href='#'>HEADLINES</a>
                    <div className='divider'></div>
                    <a href='#'>UNITED STATES</a>
                    <a href='#'>INDIA</a>
                    <a href='#'>BRITAIN</a>
                    <a href='#'>RUSSIAN</a>
                    <a href='#'>EUROPE</a>
                </div>
            </div>
        </nav>
    )
}