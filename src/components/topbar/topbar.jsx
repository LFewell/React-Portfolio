import "./topbar.scss"

export default function topbar() {
    return (
        <div className="topbar">
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
                <h1>CatJAM</h1>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div> 
    )
}