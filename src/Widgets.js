import React from "react";
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Helping jobseekers take their next step",
        "LinkedIn Corporate Communications "
      )}
      {newsArticle(
        "Our Global Flexible Work Policy",
        "LinkedIn Corporate Communications "
      )}
      {newsArticle(
        "Our 2020 Workforce Diversity Report",
        "LinkedIn Corporate Communications "
      )}
      {newsArticle(
        "Our commitment to a zero waste future",
        "LinkedIn Corporate Communications "
      )}
      {newsArticle(
        "Our 2020 Workforce Diversity Report",
        "LinkedIn Corporate Communications "
      )}
    </div>
  );
};

export default Widgets;
