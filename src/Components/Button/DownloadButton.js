import React from "react";
import Button from "@mui/material/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const DownloadButton = ({ pdfUrl, fileName }) => {
  const handleDownloadClick = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the link's href to the PDF file
    link.href = pdfUrl;

    // Set the link to open in a new tab
    link.target = "_blank";

    // Set the download attribute with the desired file name
    link.download = fileName;

    // Append the link to the document
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<GetAppIcon />}
      onClick={handleDownloadClick}
      download={fileName}
      style={{ color: "black" }}
    >
      Download CV
    </Button>
  );
};

export default DownloadButton;
