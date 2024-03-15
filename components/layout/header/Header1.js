import Link from "next/link"
import Menu from "../Menu"
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, headerCls }) {
    const navClick = (event) => {
        if (isMobileMenu && event.target.tagName === "A") {
            handleMobileMenu(event)
        }
    }
    return (
        <>
            <header id="header" className={`tra-menu white-scroll ${headerCls ? headerCls : ""}`}>
                <a name="top"></a>
                <div className="header-wrapper">
                    {/* MOBILE HEADER */}
                    <div className="wsmobileheader clearfix">
                        <span className="smllogo"><img src="/images/nimble-nexus-logo-on-light-horizontal.png" alt="mobile-logo" /></span>
                        <a id="wsnavtoggle" className="wsanimated-arrow" onClick={handleMobileMenu}><span /></a>
                    </div>
                    {/* NAVIGATION MENU */}
                    <div className={`wsmainfull menu clearfix ${scroll ? "scroll" : ""}`}>
                        <div className="wsmainwp clearfix">
                            {/* HEADER BLACK LOGO */}
                            <div className="desktoplogo">
                                <Link href="#top" className="logo-black">
                                    <img className="light-theme-img" src="/images/nimble-nexus-logo-on-light-horizontal.png" alt="logo" />
                                    <img className="dark-theme-img" src="/images/nimble-nexus-logo-on-dark-horizontal.png" alt="logo" />
                                </Link>
                            </div>
                            {/* HEADER WHITE LOGO */}
                            <div className="desktoplogo">
                                <Link href="#top" className="logo-white"><img src="/images/logo-white.png" alt="logo" /></Link>
                            </div>
                            {/* MAIN MENU */}
                            <nav className="wsmenu clearfix" style={{ height: `${isMobileMenu ? "100vh" : ""}` }} onClick={navClick}>
                                <Menu isMobileMenu={isMobileMenu} />
                            </nav> {/* END MAIN MENU */}
                        </div>
                    </div> {/* END NAVIGATION MENU */}
                </div> {/* End header-wrapper */}
            </header>

        </>
    )
}
