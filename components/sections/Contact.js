

import Link from "next/link"
export default function Banner7_2() {
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
                                        <h2 className="s-48 w-700">Got questions?</h2>
                                        {/* Text */}
                                        <p className="p-lg">
                                            We’re here to help! Connect with us at Nimble Nexus.
                                        </p>
                                        {/* HERO QUICK FORM */}
                                        <form name="quickform" className="quick-form form-shadow form-half mt-35">
                                            {/* Form Inputs */}
                                            <div className="input-group">
                                                <input type="email" name="email" className="form-control email r-06" placeholder="Your email address" autoComplete="off" required />
                                                <span className="input-group-btn form-btn" style={{marginLeft:10}}>
                                                    <button type="submit" className="btn r-06 btn--theme hover--theme submit">Get Started</button>
                                                </span>
                                            </div>
                                            {/* Form Message */}
                                            <div className="quick-form-msg"><span className="loading" /></div>
                                        </form>	{/* END HERO QUICK FORM */}
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
