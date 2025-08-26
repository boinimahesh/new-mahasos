import Layout from "../../components/layout/Layout"
import useResponsive from "../../hooks/responsive.hook"
import AboutImg from '../../assets/images/aboutus.svg'

const Aboutus = () => {
    const { isMobile } = useResponsive();
    return (
        <Layout>
            <section className="about_section">
                <div className="container">
                    <div className="row">
                    <div className={isMobile ? 'w_12' : 'w_6'} id="divName"> 
                        <h1 className="page_title">About us</h1>
                        <p>We aim at making every dream business a reality. By adopting technologically advanced means, we make sure that you get good quality services which will, in turn, lead to greater growth opportunities. With professionals to carry out your services we&apos;ll make sure your business is one step above the rest.</p>
                        <p>With a huge portfolio of services that we provide, we assure our clients quality services and timely engagements.</p>
                        <p>We adds value to our clients by supporting them in all the aspects of the services that we provide.when they face any difficult issues we support them turning out easily, scaling quicker, and incorporating new thoughts.</p>
                        <p>we work closely with every client to better understand their needs and deliver nothing but the best services.We have a dedicated team of trendsetters who will work diligently according to your requirements. We understands your requirements and follows strategies that will enhance the growth of your business on a holistic level.</p>
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_6'}>
                        <img src={AboutImg} alt="MahaSOS Logo" className="img-fluid" />
                    </div>
                    </div>
                </div>
                </section>
                <section className="secondary_section">
                <div className="container">
                    <div className="row">
                    <div className="w_12">
                        <h2>With a huge portfolio of services that we provide, we assure our clients quality services and timely engagements.</h2>
                        <h4>MahaSOS provides the following benefits to its customers across the globe.</h4>	
                        <ul>
                        <li>Agile transformation</li>
                        <li>Cost Reduction</li>
                        <li>Focusing on customers centric goals</li>
                        <li>Tailor-made engagement models as per Client requirement</li>
                        <li>Top class quality services</li>
                        <li>Offshoring</li>
                        <li>Resource Optimization</li>
                        <li>Cost-effective solutions</li>
                        <li>Customized solutions as per client requirement</li>
                        </ul>
                        <p>Get in touch with us today to find out more about the services that we offer you.!</p>
                    </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Aboutus