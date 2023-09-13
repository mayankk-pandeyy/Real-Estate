import "./Value.css"
import React, { useState } from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import {MdOutlineArrowCircleDown} from "react-icons/md"

import data from "../../utils/accordion"



function Value(){



    return (
        <div>
            <section className="v-wrapper">
                <div className="paddings innerWidth flexCenter v-container">
                    {/* Left Section */}
                    <div className="v-left">
                        <div className="image-container">
                            <img src="./images/value.png"></img>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flexColStart v-right">
                        <span className="orangeText">Our Value</span>
                        <span className="primaryText">
                            Value We Give to You
                        </span>
                        <span className="secondaryText">
                            We always ready to help by providijng the best services for you.<br></br> We beleive a good blace to live can make your life better
                        </span>

                        <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}>
                            {
                                data.map((item, i) => {
                                    return (
                                        <AccordionItem className="accordionItem" key={i} uuid={i}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton className="flexCenter accordionButton">
                                                    <div className="flexCenter icon">
                                                        {item.icon}
                                                    </div>
                                                    <span className="primaryText">
                                                        {item.heading}
                                                    </span>
                                                    <div className="flexCenter icon">
                                                        <MdOutlineArrowCircleDown size={20}></MdOutlineArrowCircleDown>
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>

                                            <AccordionItemPanel>
                                                <p className="secondaryText">
                                                    {item.detail}
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );



}

export default Value;