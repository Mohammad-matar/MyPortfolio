import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css";
import Navbar2 from "../../Component/Navbar2"
import { TextareaAutosize, TextField } from '@mui/material';


export default function Dashboardinfo() {
  const [data, setData] = useState();
  const [isloading, setIsLoading] = useState(true);

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
  //awal state bi7afez l file wel teni bi7fezz l url
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  


  //handle file select lamma na3mel select bte5od l files bye5od l data te3ounou
  //photo url bi7ot fiya url bi tari2a mou2akate
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setPhotoUrl(URL.createObjectURL(e.target.files[0]));
  };

  // source img
  const src = () => {
    if (selectedFile) {
      return photoUrl;
    } else {
      return `https://matar-api.onrender.com/uploads/${data.img}`;
    }
  };  
//onclick lal button

  useEffect(() => {
    getall();
  }, []);
  //get all data
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
//update
const handleSubmit = () => {
  const body = new FormData();
  if (name) {
    body.append("name", name);
  }

  if (description) {
    body.append("description", description);
  }

  if (selectedFile) {
    body.append("img", selectedFile);
  }

  axios
    .put(`https://matar-api.onrender.com/${data._id}`, body)
    .then((res) => {
      alert("Editing Succeeded");
      console.log(res);
    })
    .catch((err) => {
      alert("Editing Failed");
      console.log(err);
    });
};
  if (isloading) {
    return (
      
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
    );
  } else {
    return (
      <>
        <Navbar2 />
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
            <div className="about_btns1">
              <a className="edit-btn" onClick={handleOpen}>
                Edit
              </a>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h4"
                    component="h2"
                  >
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
                          defaultValue={data.name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Box
                          component="form"
                          sx={{
                            "& .MuiTextField-root": { width: "40ch" },
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            rows={7.2}
                            onChange={(e) => setDescription(e.target.value)}
                            defaultValue={data.description}
                          />
                        </Box>
                      </Box>
                    </div>
                  </div>
                  <div className="submit-edit-personalinfo-btn">
                    <button className="edit-btn" onClick={handleSubmit}>
                      {" "}
                      Submit
                    </button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>

          <div className="about_image">
            <img
              src={`https://matar-api.onrender.com/uploads/${data.img}`}
              alt={"personal profile"}
            />
          </div>
        </section>
      </>
    );
  }
}