import { NavLink } from 'react-router-dom';
import JobCard from '../components/JobCard';
import Layout from '../components/layout/Layout'
import useResponsive from '../hooks/responsive.hook';
import PosterImage from '../components/PosterImage';
import poster from '../assets/images/poster/jobsposter.png'
import poster1 from '../assets/images/poster/1.png'
import poster2 from '../assets/images/poster/2.png'
import poster3 from '../assets/images/poster/3.png'
import poster4 from '../assets/images/poster/4.png'
import poster5 from '../assets/images/poster/5.png'
import poster6 from '../assets/images/poster/6.png'
import poster7 from '../assets/images/poster/7.png'
import poster8 from '../assets/images/poster/8.png'
import poster9 from '../assets/images/poster/9.png'

const JobReactNative = () => {
    return(
        <>
            <h3>Knowledge &amp; Skills:</h3>
            <ul>                                                
                <li>ReactJS</li>
                <li>React Native</li>
                <li>Typescript</li>
                <li>Android/iOS platform</li>
                <li>REST API</li>
                <li>Redux and redux-saga</li>
            </ul>
            <h3>Responsibilities:</h3>
            <ul>
                <li> Turn current web app into a mobile app</li>
                <li> Write high-quality, pragmatic code as part of a multidisciplinary agile team.</li>
                <li> Work with Data Scientists and Backend Engineers to build features and shippable experiments.</li>
                <li> Find and address performance issues.</li>
                <li> Help build engineering expertise in engineers more junior than yourself.</li>
                <li> Identify and communicate front-end best practices.</li>
                <li>Take accountability for end-to-end production, testing, and shipping of software.</li>
                <li> Advance our strategic frontend engineering aims</li>
            </ul>
        </>
    )
}

const JobDevOps = () => {
    return(
        <>
            <h3>Knowledge &amp; Skills:</h3>
            <ul>
                <li>PHP/Mysql/Nginx</li>
                <li>node/npm</li>
                <li>node/npm</li>
                <li>Sentry</li>
                <li>SendGrid/Twilio/RingCentral</li>
                <li>DigitalOcean</li>
                <li>Docker</li>
            </ul>
            <h3>Responsibilities:</h3>
            <ul>
                <li>Build Docker images for existing applications and manage them</li>
                <li>Container orchestration using Kubernetes</li>
                <li>Experience with Digital Ocean</li>
                <li>CI/CD</li>
                <li>Setup infrastructure as code</li>
            </ul>
        </>
    )
}

const JobCustomWordPressDeveloper = () => {
    return(
        <>
            <h3>Knowledge &amp; Skills:</h3>
            <ul>
              <li>Design, develop, and maintain high-performance backend applications using Python, FastAPI, and Tortoise ORM.</li>
              <li>Collaborate closely with cross-functional teams to understand requirements and translate them into technical specifications.</li>
              <li>Architect scalable and maintainable database schemas and models using Tortoise ORM.</li>
              <li>Implement RESTful APIs and integrate them with front-end systems.</li>
            </ul>   
        </>
    )
}

const Jobs = () => {
    const {isMobile} = useResponsive();
    return (
        <Layout>
            <section className="bpo_section">
                <div className="container">
                    <div className="row mb-10">
                        <div className={isMobile ? 'w_12 textCenter' : 'w_10 mx-auto text-center'}>
                            <h1 className="page_title textCenter">We&apos;re hiring!</h1>
                            <p>Learning from and working with some of the biggest companies in the world to work on their platforms brings exciting and fulfilling new challenges every day. It’s hugely rewarding to see customers using and benefiting from our work that we’ve collaborated with this team over many months.</p>
                        </div>
                    </div>
                    <div className="row mb5">
                    <div className={isMobile ? 'w_12' : 'w_4'}>
                        <JobCard
                            title="React Native"
                            code="Job Code RN001"
                            jobContent={<JobReactNative />}
                        />
                    </div>
                    <div className={isMobile ? 'w_12' : 'w_4'}>
                        <JobCard
                            title="DevOps"
                            code="Job Code DVP002"
                            jobContent={<JobDevOps />}
                        />
                    </div>          
                    <div className={isMobile ? 'w_12' : 'w_4'}>
                        <JobCard
                            title="Senior Programmer (Python/FastAPI/Tortoise ORM)"
                            code="Job Code SR003"
                            jobContent={<JobCustomWordPressDeveloper />}
                        />
                    </div>
                    </div>
                    <div className="row">
                        <div className="w_12 textCenter mb5">
                            <h3>Email Resumes with Subject Job code to 
                            <NavLink
                                to="#"
                                style={{marginLeft: '0.5rem'}} 
                                onClick={(e) => {
                                window.location.href = 'mailto:hr@mahasos.com';
                                e.preventDefault();
                                }}
                            >
                                hr@mahasos.com
                            </NavLink>
                            </h3>
                        </div>
                    </div>
                    <PosterImage
                        posterlists={[
                            {
                            src: poster1,
                            name: "Poster 1",
                            },
                            {
                            src: poster2,
                            name: "Poster 2",
                            },
                            {
                            src: poster3,
                            name: "Poster 3",
                            },
                            {
                            src: poster4,
                            name: "Poster 4",
                            },
                            {
                            src: poster5,
                            name: "Poster 5",
                            },
                            {
                            src: poster6,
                            name: "Poster 6",
                            },
                            {
                            src: poster7,
                            name: "Poster 7",
                            },
                            {
                            src: poster8,
                            name: "Poster 8",
                            },
                            {
                            src: poster9,
                            name: "Poster 9",
                            },
                        ]}
                    />
                    <div className="row mb5">
                    <div className="w_6">
                        <img src={poster} alt="Poster" className="img-full img-fluid" />
                    </div>
                    </div>
                </div>
                </section>
        </Layout>
    )
}

export default Jobs