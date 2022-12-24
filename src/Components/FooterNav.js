import '../styles/footer.css'

export const FooterNav = () => {
    return (
        <footer className='footer-nav'>
            <div className='container'>
                <div className='logo'>FAKES<span>.</span>com</div>
                <div className='pages'>
                    <ul>
                        <a href='/Country'>UNITED STATES</a>
                        <a href='/Country'>INDIA</a>
                        <a href='/Country'>BRITAIN</a>
                        <a href='/Country'>RUSSIAN</a>
                        <a href='/Country`'>EUROPE</a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}