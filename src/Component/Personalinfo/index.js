import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

export default function Personal() {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getall();
  }, []);
  const getall = () => {
    axios
      .get("https://matar-api.onrender.com/personalinfo")
      .then((res) => {
        setData(res.data.data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (isloading) {
    return <div> isLoading </div>;
  } else {
    return (
      <section
        id="about"
        className="about_container"
        style={{ paddingTop: "120px" }}
      >
        <div className="about_content">
          <div className="about_name">
            <h1 className="about_h1">
              Hello, I am{" "}
              <span style={{ color: "#04aa6d" }}>
                <i>{data.name} </i>
              </span>{" "}
              <span> Junior Web Development</span>
            </h1>
          </div>
          <div className="about_description">{data.description}</div>
          <div className="about_btns">
            <a
              className="about_btn"
              href={`https://drive.google.com/file/d/1yptMF2q_Rzu7P1XH1FXm7LGHJPwttuMz/view?usp=sharing`}
              target={"blank"}
            >
              Check My CV
            </a>
            <a className="about_btn" href="mailto:moe.matar1998@gmail.com">
              moe.matar1998@gmail.com
            </a>
          </div>
        </div>

        <div className="about_image">
          <img
            src={`https://matar-api.onrender.com/uploads/${data.img}`}
            alt={"personal profile"}
          />
        </div>
      </section>
    );
  }
}