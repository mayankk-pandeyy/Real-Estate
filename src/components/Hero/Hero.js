import CountUp from 'react-countup';
import "./Hero.css"
import { HiLocationMarker } from 'react-icons/hi';


function Hero(){

    return (
        <div className="hero">
            <section className="hero-wrapper">
                <div className="innerWidth paddings flexCenter hero-container">


                {/* Left Side */}
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle"></div>
                            <h1>
                                Discover <br></br> Most Suitable <br></br> Property
                            </h1>
                        </div>

                        <div className="flexColStart hero-desc">
                            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                        </div>

                        <div className="flexCenter search-bar">
                            <HiLocationMarker color="var(--blue)" size={25}/>
                            <input type="text"/>
                            <button className="button">Search</button>
                        </div>
                        
                        <div className="flexCenter stats">
                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp
                                        start={8800}
                                        end={9000}
                                        duration={4}
                                    />
                                    <span>+</span>
                                </span>
                                
                                <span className='secondaryText'>Premium Product</span>
                            </div>

                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp
                                        start={1950}
                                        end={2000}
                                        duration={4}
                                    />
                                    <span>+</span>
                                </span>
                                
                                <span className='secondaryText'>Happy Customer</span>
                            </div>

                            <div className="flexColCenter stat">
                                <span>
                                    <CountUp
                                        start={0}
                                        end={28}
                                        duration={4}
                                    />
                                    <span>+</span>
                                </span>
                                
                                <span className='secondaryText'>Awards Winning</span>
                            </div>
                        </div>
                        
                    </div>



                    {/* Right Side */}
                    <div className="flexCenter hero-right">
                        {/* Right section */}
                        <div className="image-container">
                            <img src="./images/hero-image.png" alt="heroimage"></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );


}

export default Hero;