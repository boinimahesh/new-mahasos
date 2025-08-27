import { useState } from "react";
import HomeBack from "./svg/HomeBack";
import HomeFront from "./svg/HomeFront";
import { TypeAnimation } from "react-type-animation";

const HomeBanner = () => {
    const [ backHover, setBackHover ] = useState('');
    const [ frontHover, setFrontHover ] = useState('');
    let pointTop = backHover ? '100' : frontHover ? '0' : '50'
    let pointBottom = backHover ? '100' : frontHover ? '0' : '50'
    return (
        <div className="slider_effone">
            <div className={backHover ? 'back on' : 'back'}
                onMouseEnter={() => setBackHover(true)}
                onMouseLeave={() => setBackHover(false)}
                
            >
                <HomeBack />
                <div className="back-content-text">
                    <h1>Official <span className="color_secondary">Partners</span> </h1>
                    <div className="typed-text">
                        {/* <Typed
                            strings={['BPO Solutions Group, Tijuana, BC', '6July - Design agency, Hyderabad, India']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        /> */}
                        <TypeAnimation
                            sequence={[
                                'BPO Solutions Group, Tijuana, BC',
                                1000,
                                '6July - Design agency, Hyderabad, India',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className=" font-body font-bold text-28 leading-full"
                            repeat={Infinity}
                        />
                    </div>
                </div>
            </div>
            <div 
                className={frontHover ? 'front on' : 'front'}
                onMouseEnter={() => setFrontHover(true)}
                onMouseLeave={() => setFrontHover(false)}
                style={{ clipPath: `polygon(${pointTop}% 0%, 100% 0%, 100% 100%, ${pointBottom}% 100%)`}}
            >
                <HomeFront />
                <div className="front_text">
                    <h1>High <span className="color_secondary">Values</span></h1>
                    <p>Our success is not only due to the quality of <br/>
                    our work, it&apos;s down to attitude, our approach & <br/>
                    the may we treat our clients.</p>                    
                </div>
            </div>
        </div>
    )
}

export default HomeBanner