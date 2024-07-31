// Contact.js
import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import CustomeButton from "../../Components/Button/Button";
import resumeData from "../../utils/resumeData";

const Contact = () => {
  return (
    <Grid container spacing={5} className="section pt_45 pb_45">
      {/* Contact form */}
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text"> Contact Form</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="name" label="Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth name="email" label="E-mail" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomeButton text="Submit" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Grid item xs={12} lg={5}>
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text"> Contact Information</h6>
          </Grid>

          <Grid item xd={12} />
          <Grid container>
            <Grid item xs={12}>
              <Typography className="contactInfo_item">
                <span>Address:</span>
                {resumeData.Address}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="contactInfo_item">
                <span>Phone:</span>
                {resumeData.Phone}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="contactInfo_item">
                <span>Email:</span>
                {resumeData.email}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="contactInfo_socialsContainer">
              {Object.keys(resumeData.socials).map((key) => (
                <Grid item className="contactInfo_social">
                  <a href={resumeData.socials[key].link}>
                    {resumeData.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
