import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import axios from "axios";
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
  };

  return (
    <section id="experience" className="experience_section">
      <div className="experience_title">
        <h2>Experience</h2>
      </div>

      {isLoading ? (
        <div className="lds-main">
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <VerticalTimeline lineColor="Black">
          {data.map((data) => {
            return (
              <>
                <VerticalTimelineElement
                  className="vertical-timeline-element--Codi"
                  iconStyle={{ background: "#04aa6d", color: "#fff" }}
                  icon={<MdWork />}
                >
                  <div className="demo">
                    <h3 className="vertical-timeline-element-title">
                      {data.name}
                      {data.demoURL && (
                        <a href={`${data.demoURL}`} target={"blank"}>
                          <i> - demo</i>
                        </a>
                      )}
                    </h3>
                  </div>
                  <p>{data.info}</p>
                </VerticalTimelineElement>
              </>
            );
          })}
        </VerticalTimeline>
      )}
    </section>
  );
}