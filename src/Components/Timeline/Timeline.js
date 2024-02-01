import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import "./Timeline.css";
import { Typography } from "@mui/material";

// CustomTimeline component for organizing timeline items
const CustomeTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      {/* item header */}
      <TimelineItem className={"timeline_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

// CustomTimelineSeparator component for customizing timeline separators
export const CustomeTimelineSeparator = () => (
  <TimelineSeparator className={"separator_padding"}>
    <TimelineDot variant={"outlined"} className={"timeline_dot"} />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomeTimeline;
