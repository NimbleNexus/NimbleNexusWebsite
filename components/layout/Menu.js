import Link from "next/link"
import { useRouter } from "next/router"

export default function Menu({ isMobileMenu }) {
    const router = useRouter()

    return (
        <>

            <ul className="wsmenu-list nav-theme">
                {isMobileMenu && (
                    <li className="nl-simple" aria-haspopup="false"><Link href="#top" className="h-link">Home</Link></li>
                )}
                <li className="nl-simple" aria-haspopup="false"><Link href="#how-it-works" className="h-link">How it works</Link></li>
                <li className="nl-simple" aria-haspopup="false"><Link href="#products-and-services" className="h-link">What we build</Link></li>
                <li className="nl-simple" aria-haspopup="false"><Link href="#founders-stories" className="h-link">Founders' Stories</Link></li>
                <li className="nl-simple" aria-haspopup="false"><Link href="#mission" className="h-link">Mission</Link></li>
                <li className="nl-simple" aria-haspopup="false">
                    <Link href="#contact-us" className="btn r-04 btn--theme hover--tra-white last-link">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
