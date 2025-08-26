import ContactForm from '../components/ContactForm'
import Layout from '../components/layout/Layout'
import PlaceSection from '../components/PlaceSection'

const Contactus = () => {
    return (
        <Layout>
            <section className="bpo_section">
                <div className="container">
                    <div className="row">
                    <div className="w_full">
                        <h1 className="page_title textCenter">Contact us</h1>
                    </div>          
                    </div>
                    <div className="row mb5">
                    <div className="w_8 mxAuto">
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
            <PlaceSection notitle bgwhite />
        </Layout>
    )
}

export default Contactus