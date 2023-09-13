import "./Header.css"
import React from "react";

function Header(){

return (
    <div>
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth hContainer">
                <img src="./images/logo.png" alt="logo" width={100}></img>


                <div className="flexCenter h-menu">
                    <a href="">
                        Residencies
                    </a>
                    <a href="">
                        Our Value
                    </a>
                    <a href="">
                        Contact Us
                    </a>
                    <a href="">
                        Get Started
                    </a>
                    <button className="button">
                        <a href="">
                            Contact
                        </a>
                    </button>
                </div>
            </div>
        </section>
    </div>
);

}


export default Header;