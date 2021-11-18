import "./topbar.scss"

export default function topbar({menuOpen, setMenuOpen}) {
    return (    
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">LF./</a>
                    <div className="itemContainer">
                    <div className="material-icons md-24">phone_iphone</div> 
                    <span>404-917-9899</span>
                    </div>
                    <div className="itemContainer">
                    <div className="material-icons md-24">email</div> 
                    <span>LincolnTFewell@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}