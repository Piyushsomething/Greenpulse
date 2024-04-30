"use client";
import React, { useRef } from "react";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

const ScreenPdfComponent = () => {
  const captureAndSave = () => {
    window.scrollTo(0, 0); // Ensure full page capture

    const scale = window.devicePixelRatio;
    const contentWidth = document.body.scrollWidth;
    const contentHeight = document.body.scrollHeight;

    html2canvas(document.body, {
      scale: scale,
      width: contentWidth,
      height: contentHeight,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "in",
        format: [contentWidth / 96, contentHeight / 96], // Adjusting dimensions to fit the content
      });
      pdf.addImage(imgData, "PNG", 0, 0, contentWidth / 96, contentHeight / 96); // Adjusting dimensions to fit the content
      pdf.save("captured_page.pdf");
    });
  };

  return (
    <div>
      <button className="btn btn-outline "onClick={captureAndSave}>Capture & Share</button>
    </div>
  );
};

export default ScreenPdfComponent;
