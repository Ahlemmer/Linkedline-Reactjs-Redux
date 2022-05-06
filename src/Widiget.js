import React from "react";
import "./Widgit.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widiget() {
  const newArticle = (heading, subtitle) => {
    return (
      <div className="widiget_Article">
        <div className="widiget_ArticleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widiget_ArticleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widiget">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newArticle("PaPa React is Back", "Top news-9099 readers")}
      {newArticle("# MeToo", "Top news-9099 readers")}
      {newArticle("JavaScript Tutorial", "Top news-9099 readers")}
      {newArticle("# MeToo", "Top news-9099 readers")}
    </div>
  );
}

export default Widiget;
