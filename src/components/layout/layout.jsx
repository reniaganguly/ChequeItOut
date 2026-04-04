import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Layout = ({children}) =>{
    
    return <div className="min-h-screen">
        <Navbar/>
        <main className="w-full">
            {children}
        </main>
        <Footer/>
    </div>
};

export default Layout;