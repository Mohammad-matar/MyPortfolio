import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';
import axios from 'axios';
import "./style.css";

export default function Experience() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getall();
    }, []);
    const getall = () => {
        axios
          .get("http://localhost:4040/experience")
          .then((res) => {
            setData(res.data.data);
            console.log(res.data.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    return (
      <section id="experience">
        <hr />
        <div className="experience">
          <div className="experience-title">
            {" "}
            <h1>Experience</h1>
          </div>
          <VerticalTimeline lineColor="Black">
            {isLoading ? (
              <>isLoading...</>
            ) : (
              data.map((data) => {
                return (
                  <>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--Codi"
                      // date={`${elt.attributes.period.start_date} - ${elt.attributes.period.end_date}`}
                      iconStyle={{ background: "#04aa6d", color: "#fff" }}
                      icon={<MdWork />}
                      // key={elt.id}
                    >
                      <div className="demo">
                        <h3 className="vertical-timeline-element-title">
                          {data.name}
                          <a
                            href="https://abdallah-badra.herokuapp.com/"
                            target={"blank"}
                          >
                            <i>-demo</i>
                          </a>{" "}
                        </h3>
                      </div>
                      <p>{data.info}</p>
                      {/* <div className="skills-experience">
                          <ul>
                            <li>{data.details}</li>
                            <li>sdada</li>
                            <li>sdada</li>
                          </ul>
                        </div> */}
                    </VerticalTimelineElement>
                  </>
                );
              })
            )}
          </VerticalTimeline>
        </div>
      </section>
    );
}


