import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from 'react-icons/io';
import { MdWork } from 'react-icons/md';
import "./style.css";

export default function Experience() {
    return (
        <section id="experience">
            <div className="experience">
                <div className="experience-title"> <h1>Experience</h1></div>
                <VerticalTimeline lineColor="Black">
                    {/*  badra project portfolio */}
                    <VerticalTimelineElement className="vertical-timeline-element--Codi"
                        date="2021-2022"
                        iconStyle={{ background: '#04aa6d', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="demo"><h3 className="vertical-timeline-element-title">Portfolio with Dashboard
                            <a href="https://abdallah-badra.herokuapp.com/" target={'blank'}> <i>-demo</i></a> </h3></div>
                        <p>Built by MERN stack, React Js for
                            the frontend and Node Js for the
                            backend with MongoDB
                            as database</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement className="vertical-timeline-element--Codi"
                        date="2021-2022"
                        iconStyle={{ background: '#04aa6d', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <div className="demo"><h3 className="vertical-timeline-element-title">WordPress
                            <a href="https://group16.codi-wordpress.com/" target={'blank'}> <i>-demo</i></a> </h3></div>
                        <p>Customized following my client's
                            requirements, whose goal was to
                            share his homemade products</p>


                    </VerticalTimelineElement>

                    {/* Study Experience */}
                    <VerticalTimelineElement className="vertical-timeline-element--Codi"
                        date="2021-2022"
                        iconStyle={{ background: '#04aa6d', color: '#fff' }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Codi</h3>
                        <h2>Full Stack Development internship</h2>
                        <p>Back end (NodeJs, Mongoose, SQL)
                            Front end (JavaScript, React,
                            Bootstrap,React Native,PHP, Laravel)</p>
                        <p>Server Management (LAMP Stack, Linux,
                            Mern stack)</p>
                        <p>Project Management (AGILE
                            Methodology)
                        </p>
                        <p>Content Management System
                            (WordPress)
                        </p>
                    </VerticalTimelineElement>

                    {/* work */}
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                        date="2019 -2021"
                        iconStyle={{ background: '#04aa6d', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">BUSINESS DEALER & ONLINE MARKETING
                            TOYOTA-BEIRUT
                        </h3>
                        <p>Look for potential cars through OLX</p>
                        <p>Buy suitable cars for the company</p>
                        <p>Communicate with customers</p>
                        <p>Negotiate final sales prices</p>
                    </VerticalTimelineElement>

                    {/* education */}
                    <VerticalTimelineElement className="vertical-timeline-element--work"
                        date="2018 - 2019"
                        iconStyle={{ background: '#04aa6d', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Online marketing & Phone sales</h3>
                        <p>Interact daily with customers</p>
                        <p>Buy and resell used mobile phones</p>
                        <p>Provide great customer service</p>
                        <p>Deliver practiced sales speech in order to
                            persuade potential customers to purchase a
                            phone</p>
                        <p>Explain products and prices and answer
                            customer's questions</p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    );
}


