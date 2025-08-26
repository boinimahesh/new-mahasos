import type { ReactNode } from "react";
import Footer from "./Footer"
import Header from "./Header"

type LayoutProps = {
    children: ReactNode;
}

const Layout = ({children} : LayoutProps) => {
    return (
        <div className="layout-wrapper">
            <Header />
            <div className="layout-main">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout