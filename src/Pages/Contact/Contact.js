import React, { useState } from "react";
import { Grid, Typography, TextField, Snackbar, Alert } from "@mui/material";
import CustomeButton from "../../Components/Button/Button"; // Make sure this is correctly defined
import resumeData from "../../utils/resumeData";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    emailjs
      .send(
        "service_p9d12z9",
        "template_m55y5dv",
        formData,
        "JukNmhqMxn9g0zf0i"
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setNotificationMessage("Email sent successfully!");
        setNotificationSeverity("success");
        setOpen(true);
        setFormData({ name: "", email: "", message: "" }); // Reset the form
      })
      .catch((error) => {
        setNotificationMessage(
          "Failed to send message. Please try again later."
        );
        setNotificationSeverity("error");
        setOpen(true);
      });
  };

  return (
    <>
      <Grid
        container
        spacing={5}
        className="section pt_45 pb_45"
        component="form" // Ensure the form tag is used here
        onSubmit={handleSubmit} // Attach onSubmit to the form
      >
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* Make this a standard submit button */}
                  <CustomeButton text="Submit" type="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>

            <Grid item xs={12}>
              <Typography className="contactInfo_item">
                <span>Address:</span> {resumeData.Address}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="contactInfo_item">
                <span>Phone:</span> {resumeData.Phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="contactInfo_item">
                <span>Email:</span> {resumeData.email}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={() => setOpen(false)} severity={notificationSeverity}>
          {notificationMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
