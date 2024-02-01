import { Typography } from "@mui/material";
import React from "react";
import CustomTimeline, { CustomeTimelineSeparator } from "../Timeline/Timeline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import resumeData from "../../utils/resumeData";
import "./Profile.css";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";
import DownloadButton from "../Button/DownloadButton";

// CustomTimelineItem component to represent each item in the timeline
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomeTimelineSeparator />
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
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/Profile.jpg")} alt="" />
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
          <DownloadButton
            pdfUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
            fileName="Your_CV.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
