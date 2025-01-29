import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Bosu Identity</title>
                <meta name='description' content="Connect with passionate individuals in the FinalBosu community through your unique digital identity. Express yourself, showcase your personality, and become part of something extraordinary." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/logo-icon.png' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout