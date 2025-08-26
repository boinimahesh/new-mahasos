
import PortfolioCardOld from './PortfolioCardOld'
import ZingoImg from '../assets/images/portfolio/portfolio-4.jpg'
import DudeAgencyImg from '../assets/images/portfolio/portfolio-7.jpg'
import IlovekickboxingImg from '../assets/images/portfolio/portfolio-2.jpg'
import BPOSolutionsGroupImg from '../assets/images/portfolio/portfolio-3.jpg'
import MaruthiPrintersImg from '../assets/images/portfolio/portfolio-1.jpg'
import USMaximImg from '../assets/images/portfolio/portfolio-5.jpg'
import PanaImg from '../assets/images/portfolio/pana.jpg'
import WuusaImg from '../assets/images/portfolio/wuusa.jpg'
import SantaImg from '../assets/images/portfolio/portfolio-8.jpg';
import CienceImg from '../assets/images/portfolio/portfolio-9.jpg';
import StabilityHealthcareImg from '../assets/images/portfolio/stability-health-care.svg';
import TheSportsmanImg from '../assets/images/portfolio/the-sportsmans-club.jpg';
import SiteSyncImg from '../assets/images/portfolio/sitesync.svg';
import PethotelsImg from '../assets/images/portfolio/pethotels-with-dog.svg';

const PortfolioSection = () => {
    return (
        <div className="portfolioGroup">
            <PortfolioCardOld
                title="Zingo Credit"
                desc="Zingo’s secure and automated service uses bank-strength, 128-bit encryption to protect your personal data. Your data is always private, confidential, and secure."
                image={ZingoImg}
                buttonLink="https://www.creditsesame.com/"
            />
            <PortfolioCardOld 
                title="Dude Agency"
                desc="To solve the People and Process problems that digital agencies experience by bridging the gap between our staff and our clients, which will help our clients grow and become more profitable."
                image={DudeAgencyImg}
                buttonLink="https://dudeagency.io/who-we-are/"
            />
            <PortfolioCardOld 
                title="I Love Kickboxing"
                desc="ILKB is a FITfam of likeminded people who come together to build confidence, inspire one another and strive to develop the best you possible through each workout."
                image={IlovekickboxingImg}
                buttonLink="https://www.ilovekickboxing.com/"
            />
            <PortfolioCardOld 
                title="BPO Solutions Group"
                desc="Outsource Experts in Scaling Operational Roles and Sales Teams Give us 15 minutes so we can demonstrate the abilities our clients tell their friends about. We’re proud to be called the best seamless near-shore support solution in the United States and Mexico."
                image={BPOSolutionsGroupImg}
                buttonLink="http://bposolutionsgroup.com/"
            />
            <PortfolioCardOld 
                title="Maruthi Printers"
                desc="Online printing services for Individuals and corporate in India. End to end digital printing and offset printing services online from designing to delivery."
                image={MaruthiPrintersImg}
                buttonLink="https://www.marutireprint.in/"
            />
            <PortfolioCardOld 
                title="US Maxim"
                desc="You can find a huge selection of nail art supplies to run a successful salon business at our location and promise we will beat any competitors prices."
                image={USMaximImg}
                buttonLink="https://www.usmaxim.com/"
            />
            <PortfolioCardOld 
                title="Panoramic Visions"
                desc="Panoramic Visions Photography was started thirty years ago by the world famous photographer, Abbas Shirmohammadi. Over the years he has build a reputation of taking the most beautiful and striking photographs all over the world."
                image={PanaImg}
                buttonLink="https://www.panoramicvisions.com/"
            />
            <PortfolioCardOld 
                title="WatchUniverseUSA"
                desc="WATCH UNIVERSE USA is a family owned business since 1998 with dealings in the watch industry since 1988; with affiliated offices worldwide."
                image={WuusaImg}
                buttonLink="https://watchuniverseusa.com/"
            />
            <PortfolioCardOld 
                title="Santa for a Day"
                desc="Santa for a Day partners with the Chicago Housing Authority to answer letters-to-Santa from disadvantaged kids."
                image={SantaImg}
                buttonLink="http://santaforaday.org/"
            />
            <PortfolioCardOld 
                title="CIENCE"
                desc="CIENCE helps grow your business with a sophisticated approach to b2b lead generation."
                image={CienceImg}
                buttonLink="https://www.cience.com/"
            />
            <PortfolioCardOld 
                title="Stability Healthcare"
                desc="We support the largest sector of the healthcare industry to lead fulfilling professional and personal lives. With empowered clinicians, we aim to improve the industry holistically."
                image={StabilityHealthcareImg}
                buttonLink="https://stabilityhealthcare.com/"
            />
            <PortfolioCardOld 
                title="The Sportsman&#039;s Club"
                desc="The Sportsman’s Club is a specialized membership service for outdoorsmen looking to book guided hunting or fishing trips."
                image={TheSportsmanImg}
                buttonLink="https://sportsmansclub.netdevsite.com/"
            />
            <PortfolioCardOld 
                title="SiteSync"
                desc="Analyzing previous trends ensures that businesses always make the right decision. And as the scale of the decision"
                image={SiteSyncImg}
                buttonLink="https://play.google.com/store/apps/details?id=com.site_sync.site_sync&hl=en_IN"
            />
            <PortfolioCardOld 
                title="Pethotels"
                desc="Our site was created with great love for pets. Our main goal is to ensure them the best care and support. We are dedicated to our four-legged friends and strive for their happiness and health."
                image={PethotelsImg}
                buttonLink="https://pethotels.dk/"
            />
        </div>
    )
}

export default PortfolioSection