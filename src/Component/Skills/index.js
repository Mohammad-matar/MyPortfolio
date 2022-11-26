import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export default function Skills() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getall();
  }, []);

  const getall = () => {
    axios
      .get("https://matar-api.onrender.com/skills")
      .then((res) => {
        setData(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section id="skills" className="skills_section">
      <div className="skills_title">
        <h2>Skills</h2>
      </div>
      <div className="skills_list">
        {isLoading ? (
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
        ) : (
          data.map((data) => {
            return (
              <div className="skill_item">
                <div className="skill_img">
                  <img
                    src={`https://matar-api.onrender.com/uploads/${data.img}`}
                    alt={data.name}
                  />
                </div>
                <h3 className="skill_name">{data.name}</h3>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}