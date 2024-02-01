import React, { useState } from "react";
import "./Portfolio.css";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grow,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import resumeData from "../../utils/resumeData";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";

// Update the import path based on your folder structure

const Portfolio = () => {
  // State to manage selected tab and project dialog
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text"> Portfolio </h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="White"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          {/* All tab */}
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />

          {/* Dynamically generated tabs based on project tags */}
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                key={tag}
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {/* Map through projects and display based on selected tab */}
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item key={project.title} xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.images[0]}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      {/* Project Dialog */}
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        maxWidth={"lg"}
        fullWidth
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>

        <DialogContent style={{ height: "80vh" }}>
          {projectDialog.images && (
            <ImageGallery images={projectDialog.images} />
          )}

          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>

        {/* Display project links */}
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link) => (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              className="projectDialog_icon"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Portfolio;
