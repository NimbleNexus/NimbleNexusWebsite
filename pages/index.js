import Layout from "../components/layout/Layout"
import Brands1_5 from "../components/sections/Brands1_5"
import Ct01_10 from "../components/sections/Ct01_10"
import Ct02_14 from "../components/sections/Ct02_14"
import Ct04_3 from "../components/sections/Ct04_3"
import Ct08_3 from "../components/sections/Ct08_3"
import Faqs3_6 from "../components/sections/Faqs3_6"
import Features2_7 from "../components/sections/Features2_7"
import Integrations2_4 from "../components/sections/Integrations2_4"
import Lnk1_7 from "../components/sections/Lnk1_7"
import Lnk2_7 from "../components/sections/Lnk2_7"
import Lnk3_5 from "../components/sections/Lnk3_5"
import Reviews2_2 from "../components/sections/Reviews2_2"
import Statistic1_7 from "../components/sections/Statistic1_7"
import Wswrapper_1 from "../components/sections/Wswrapper_1"
import Banner7_2 from "../components/sections/Contact"
import Hero7 from "../components/sections/Hero"
import Features6_3 from "../components/sections/HowItWorks"
import Features13_3 from "../components/sections/Products"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark">
                <Hero7 />
                <Features6_3 />
                <hr className="divider" />
                <Features13_3 />
                <Reviews2_2 />
                <Wswrapper_1 />
                <Lnk1_7 />
                <hr className="divider" />
                <Banner7_2 />
                <hr className="divider" />
            </Layout>
        </>
    )
}