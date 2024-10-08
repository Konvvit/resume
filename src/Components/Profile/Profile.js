import { Typography } from "@mui/material";
import React, { useState } from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import resumeData from "../../utils/resumeData";
import "./Profile.css";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import DownloadButton from "../Button/DownloadButton";

// CustomTimelineItem component to represent each item in the timeline
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

// Profile component representing the user's profile information
const Profile = () => {
  const [language, setLanguage] = useState("en"); // State to manage the selected language

  // Define URLs for both CV versions
  const cvUrls = {
    en: "https://firebasestorage.googleapis.com/v0/b/resume-db8cc.appspot.com/o/Cv%202024%20(Eng).pdf?alt=media&token=dc7965a4-73af-48f4-9651-58ef0452f313",
    sv: "https://firebasestorage.googleapis.com/v0/b/resume-db8cc.appspot.com/o/Cv%202024%20(Swe).pdf?alt=media&token=10565f8f-5320-4f5a-81be-418bf2899664",
  };

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/Profile.png")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<AccountBoxIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              key={key}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container">
          {/* Language Selector */}
          <select
            className="language-selector" // Add the class for styling
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="sv">Swedish</option>
          </select>
          {/* Download Button */}
          <DownloadButton
            pdfUrl={cvUrls[language]}
            fileName={
              language === "en" ? "Your_CV_English.pdf" : "Ditt_CV_Svenska.pdf"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
