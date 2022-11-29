import React, { useEffect, useState } from "react";
import plus from "../../portfoliologo/ellipse.png";
import axios from "axios";
import "./style.css";
import { Box, Modal, TextField, Typography } from "@mui/material";

export default function Skills() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #fff",
    boxShadow: 24,
    p: 4,
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setPhotoUrl(URL.createObjectURL(e.target.files[0]));
  };

  const src = () => {
    if (selectedFile) {
      return photoUrl;
    } else {
      return `https://matar-api.onrender.com/uploads/`;
    }
  };
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


  const handleSubmit = () => {
    const body = new FormData();
    if (name) {
      body.append("name", name);
    }

    if (selectedFile) {
      body.append("img", selectedFile);
    }

    axios
      .post(`https://matar-api.onrender.com/`, data)
      .then((res) => {
        setData({});
        alert("Skill added successfully");
      })
      .catch((err) => console.log(err));
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
        <img src={plus} onClick={handleOpen} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Edit Personal Information
            </Typography>
            <div className="edit-personalinfo-container">
              <div className="edit-personalinfo-img">
                <img src={src()}></img>
                {/* upload image */}
                <input
                  type="file"
                  id="image"
                  hidden
                  onChange={handleFileSelect}
                />
                <label for="image" className="upload-img-form">
                  Upload
                </label>
              </div>

              <div className="edit-personalinfo-content">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
              </div>
            </div>
            <div className="submit-edit-personalinfo-btn">
              <button className="edit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </section>
  );
}