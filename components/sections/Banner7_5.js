

import Link from "next/link"
export default function Banner7_5() {
    return (
        <>
            <section id="banner-7" className="banner-section">
                <div className="banner-overlay py-100">
                    <div className="container">
                        {/* BANNER-7 WRAPPER */}
                        <div className="banner-7-wrapper">
                            <div className="row justify-content-center">
                                {/* BANNER-7 TEXT */}
                                <div className="col-md-8">
                                    <div className="banner-7-txt text-center">
                                        {/* Title */}
                                        <h2 className="s-50 w-700">Starting with Martex is easy, fast and free</h2>
                                        {/* Button */}
                                        <Link href="/signup-1" className="btn r-04 btn--theme hover--tra-black">Get srarted - it's free
                                        </Link>
                                        {/* Button Text */}
                                        <p className="p-sm btn-txt ico-15 o-85">
                                            <span className="flaticon-check" /> Free for 14 days, no credit card required.
                                        </p>
                                    </div>
                                </div>
                            </div>   {/* End row */}
                        </div>    {/* END BANNER-7 WRAPPER */}
                    </div>    {/* End container */}
                </div>     {/* End banner overlay */}
            </section>
        </>
    )
}
