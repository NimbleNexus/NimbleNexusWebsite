

export default function Hero7() {
    return (
        <>
            <section id="hero-7" className="gr--perl hero-section">
                <div className="hero-overlay">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            {/* HERO TEXT */}
                            <div className="col-md-6">
                                <div className="hero-7-txt">
                                    {/* Title */}
                                    <h2 className="s-54 w-700">What if it's easy?</h2>
                                    {/* Text */}
                                    <p className="p-lg">
                                        Discover AI-driven solutions designed to seamlessly integrate into your daily routine, reducing hassle and boosting efficiency. Our journey began with a vision to create accessible technology that enhances life—one task at a time.
                                    </p>
                                </div>
                            </div>	{/* END HERO TEXT */}
                            {/* HERO IMAGE */}
                            <div className="col-md-6">
                                <div className="hero-7-img text-center">
                                    <img className="img-fluid" src="/images/img-06.png" alt="hero-image" />
                                </div>
                            </div>
                        </div>    {/* End row */}
                    </div>	   {/* End container */}
                </div>	   {/* End hero-overlay */}
            </section>
        </>
    )
}
