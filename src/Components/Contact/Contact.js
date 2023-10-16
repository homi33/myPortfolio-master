import React, { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import "./Contact.css";

const Contact = () => {
  const emailEndpoint = "http://localhost:8080/sendemail";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [jobType, setJobType] = useState("Full-time");
  const [message, setMessage] = useState("");

  const sendEmailInfo = () => {
    fetch(emailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobType,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success("Your E-mail has been sent", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setName("");
          setEmail("");
          setJobType("Full-time");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contactsection">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="contact-form-iamge">
              <img
                src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="contact form"
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Me</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-label">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form">
                  <label className="form-label">Job Types</label>
                  <select
                    className="custom-select-tag"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  >
                    <option>Full-time</option>
                    <option>Working Student</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="4"
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="button-submit" onClick={sendEmailInfo}>
                  <p>
                    Send <RiSendPlaneFill size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>

      <ToastContainer draggable autoClose={8000} />
    </div>
  );
};

export default Contact;
