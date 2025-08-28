import Layout from "../components/layout/Layout"
import ImgCrispin from '../assets/images/team/c4.jpg'
import ImgPatty from '../assets/images/team/patty.jpg'
import ImgPat from '../assets/images/team/pat.jpg'
import ImgNax from '../assets/images/team/nax.jpg'
import ImgBas from '../assets/images/team/bhaskar.jpg'
import ImgSasi from '../assets/images/team/sasi.jpg'
import ImgMahesh from '../assets/images/team/mahesh.png'
import ImgSravan from '../assets/images/team/sravan.jpg'
import ImgBhargav from '../assets/images/team/bhargav.jpg'
import ImgRaj from '../assets/images/team/raj.jpg'
import ImgKrish from '../assets/images/team/krish.jpg'
import ImgSai from '../assets/images/team/saileela.jpg'
import ImgSaraswathi from '../assets/images/team/saras.jpg'
import ImgMounika from '../assets/images/team/mounka_1.jpg'
import ImgPrestonWallitsch from '../assets/images/team/preston.jpg'
import ImgDavid from  '../assets/images/team/david.jpg'
import ImgSupriya from '../assets/images/team/supriya.jpg'
import ImgDeepika from '../assets/images/team/deepika.png'
import ImgPooja from '../assets/images/team/pooja.jpg'
import ImgASMRaju from '../assets/images/team/asmraju.jpg'
import ImgNidhi from '../assets/images/team/nidhi.jpg'
import ImgNikhil from '../assets/images/team/nikhil.jpg'
import ImgSuryaPrakash from '../assets/images/team/surya-prakash.jpg'
import ImgKeerthana from '../assets/images/team/keertana.jpg'
import ImgVamsi from '../assets/images/team/vamsi.jpg'
import ImgSunil from '../assets/images/team/sunil.jpg'
import ImgVandana from '../assets/images/team/vandana.jpg'
import ImgAyush from '../assets/images/team/ayush.jpg'
import WddpCard from "../components/WddpCard"
import TeamCard from "../components/TeamCard"
import JoinOurTeamSection from "../../src/components/JoinOurTeamSection"


const Team = () => {
    return (
        <Layout>
            <section className="ourteam_section">
      <div className="container">
        <div className="row">
          <div className="w_full">
            <h1 className="page_title textCenter">Think Tank</h1>
          </div>
          <div className="team_group">
            <TeamCard 
              name="Crispin"
              title="Business Development Head (Overseas)"
              src={ImgCrispin}
            />
            <TeamCard 
              name="Patty"
              title="Contact Service Outsourcing"
              src={ImgPatty}
            />
            <TeamCard 
              name="Pat"
              title="Business Development Head (India)"
              src={ImgPat}
            />
            <TeamCard 
              name="ASM Raju"
              title="Business Development Head (India)"
              src={ImgASMRaju}
            />
            <TeamCard 
              name="Nax"
              title="Chief Technical Officer (CTO)"
              src={ImgNax}
            />
            <TeamCard
              name="Bas"
              title="Chief Designing Head"
              src={ImgBas}
            />
            <TeamCard 
              name="Sasi"
              title="Project Manager"
              src={ImgSasi}
            />
            <TeamCard 
              name="Mahesh"
              title="Sr Developer"
              src={ImgMahesh}
            />
            <TeamCard 
              name="Sravan"
              title="Sr Developer"
              src={ImgSravan}
            />
            <TeamCard 
              name="David"
              title="Data Analyst"
              src={ImgDavid}
            />
            <TeamCard 
              name="Raj"
              title="SalesForce Expert"
              src={ImgRaj}
            />
            <TeamCard 
              name="Bhargav"
              title="Jr Developer"
              src={ImgBhargav}
            />
            <TeamCard 
              name="Krish"
              title="HR"
              src={ImgKrish}
            />
            <TeamCard 
              name="Supriya"
              title="Sr React Native"
              src={ImgSupriya}
            />
            <TeamCard 
              name="Sai"
              title="Sr QA Engineer"
              src={ImgSai}
            />
            <TeamCard 
              name="Deepika"
              title="Data Analyst"
              src={ImgDeepika}
            />
            <TeamCard 
              name="Pooja"
              title="Jr HR"
              src={ImgPooja}
            />
            <TeamCard 
              name="Saraswathi"
              title="Android Developer"
              src={ImgSaraswathi}
            />
            <TeamCard 
              name="Mounika"
              title="iOS Developer"
              src={ImgMounika}
            />
            <TeamCard 
              name="Preston Wallitsch"
              title="Product Owner"
              src={ImgPrestonWallitsch}
            />
            <TeamCard 
              name="Nidhi"
              title="Sr Flutter Dev"
              src={ImgNidhi}
            />
            <TeamCard 
              name="Nikhil"
              title="Sr Frontend Dev"
              src={ImgNikhil}
            />
            <TeamCard 
              name="Surya Prakash"
              title="Sr Full Stack"
              src={ImgSuryaPrakash}
            />
            <TeamCard 
              name="Keerthana"
              title="Unity Developer"
              src={ImgKeerthana}
            />
            <TeamCard 
              name="Vamsi"
              title="Jr Developer"
              src={ImgVamsi}
            />
            <TeamCard 
              name="Sunil"
              title="Sr Test Engineer"
              src={ImgSunil}
            />
            <TeamCard 
              name="Vandana"
              title="Sr Java Developer"
              src={ImgVandana}
            />
            <TeamCard 
              name="Ayush"
              title="AI & ML Dev"
              src={ImgAyush}
            />
          </div>
        </div>
      </div>
    </section>
    <section className="wrapper">
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container">
        <div className="welcome_text">
          <h1 className="head_h1">Web Design & Development Process</h1>
        </div>
        <div className="wdp_group">
          <WddpCard 
            count="01"
            title="Meeting"
            desc="Client Meeting, Client Requirements, Analysis, Collect Data"
          />
          <WddpCard 
            count="02"
            title="Planning"
            desc="Project Analysis, Consultation & Research"
          />
          <WddpCard 
            count="03"
            title="Designing"
            desc="Wireframes, Design Concepts, Revisions & Finalisation"
          />
          <WddpCard 
            count="04"
            title="Developing"
            desc="HTML/CSS, Programming code for custom requirements"
          />
          <WddpCard 
            count="05"
            title="Testing"
            desc="Usability Testing verification design quality check approval"
          />
          <WddpCard 
            count="06"
            title="Delivery"
            desc="We deliver a finished project that meet high standards & exceeds client expectations"
          />
        </div>
      </div>
    </div>
  </section>
  <JoinOurTeamSection />
        </Layout>
    )
}

export default Team