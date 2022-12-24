import { useState } from 'react'
import '../styles/nav.css'
import hamMenuIcon from '../media/ham-menu.png'
import crossIcon from '../media/cross.png'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { useContext } from 'react'

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const {setCountry} = useContext(AppContext);

    return (
        <nav className='primary-nav'>
            <img src={hamMenuIcon} id="menu-btn" onClick={() => setShowMenu(true)} alt="" />
            <h1 className='heading'>FAKES<span className='red'>.</span><span className='small'>com</span></h1>
            <div className={`links ${showMenu && "showmenu"}`}>
                <div className={`link-list`}>
                    <img src={crossIcon} onClick={() => setShowMenu(false)} alt="" />
                    <a href='/feed'>HOME</a>
                    <Link to={'/Country'} onClick={() => setCountry("")}>HEADLINES</Link>
                    <div className='divider'></div>
                    <Link to={'/Country'} onClick={()=>setCountry("us")}>UNITED STATES</Link>
                    <Link to={'/Country'} onClick={() => setCountry("in")}>INDIA</Link>
                    <Link to={'/Country'} onClick={() => setCountry("br")}>BRITAIN</Link>
                    <Link to={'/Country'} onClick={() => setCountry("ru")}>RUSSIAN</Link>
                    <Link to={'/Country'} onClick={()=>setCountry("sa")}>SOUTH AFRICA</Link>
                </div>
            </div>
        </nav>
    )
}