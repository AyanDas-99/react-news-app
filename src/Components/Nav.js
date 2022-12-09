import '../styles/nav.css'
import hamMenuIcon from '../media/ham-menu.png'
import crossIcon from '../media/cross.png'
import '../scripts/demo.js'

export const Nav = () => {
    return (
        <nav className='primary-nav'>
            <img src={hamMenuIcon} id="menu-btn"/>
            <h1 className='heading'>FAKES<span className='red'>.</span><span className='small'>com</span></h1>
            <div className='links'>
                <img src={crossIcon}/>
                <ul className='link-list'>
                    <li><a href='#'>HEADLINES</a></li>
                    <div className='divider'></div>
                    <li><a href='#'>UNITED STATES</a></li>
                    <li><a href='#'>INDIA</a></li>
                    <li><a href='#'>BRITAIN</a></li>
                    <li><a href='#'>RUSSIAN</a></li>
                    <li><a href='#'>EUROPE</a></li>
                </ul>
            </div>
        </nav>
    )
}