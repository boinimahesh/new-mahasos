import Layout from "../components/layout/Layout"
import PortfolioSection from "../components/PortfolioSection"

const Portfolio = () => {
    return (
        <Layout>
            <section className="portfolio_section">
                <div className="container">
                    <div className="row">
                        <div className="w_full">
                            <h1 className="page_title textCenter">Portfolio</h1>
                        </div>
                        <PortfolioSection />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Portfolio