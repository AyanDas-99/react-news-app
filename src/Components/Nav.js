import { useState } from 'react'
import '../styles/nav.css'
import hamMenuIcon from '../media/ham-menu.png'
import crossIcon from '../media/cross.png'
import { Link } from 'react-router-dom'

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className='primary-nav'>
            <img src={hamMenuIcon} id="menu-btn" onClick={() => setShowMenu(true)} alt=""/>
            <h1 className='heading'>FAKES<span className='red'>.</span><span className='small'>com</span></h1>
            <div className={`links ${showMenu && "showmenu"}`}>
                <div className={`link-list`}>
                <img src={crossIcon} onClick={() => setShowMenu(false)} alt=""/>
                    <a href='/feed'>HOME</a>
                    <a href='/Country'>HEADLINES</a>
                    <div className='divider'></div>
                    <Link to={'/Country'}>UNITED STATES</Link>
                    <a href='/Country'>INDIA</a>
                    <a href='/Country'>BRITAIN</a>
                    <a href='/Country'>RUSSIAN</a>
                    <a href='/Country`'>EUROPE</a>
                </div>
            </div>
        </nav>
    )
}