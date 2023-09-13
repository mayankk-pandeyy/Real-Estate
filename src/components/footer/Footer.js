import "./Footer.css"


function Footer(){


    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                {/* Left side */}
                <div className="flexColStart f-left">
                    <img src="./images/logo2.png" width={120}></img>
                    <span className="secondaryText">
                        Our vision is to make all people<br></br>the best place to live for them.
                    </span>
                </div>

                {/* Footer Right */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">145 New York, FL 5467, USA</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );


}

export default Footer;