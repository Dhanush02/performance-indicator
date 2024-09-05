import React from 'react';
import "../../Styles/Cards/metricCard.css";

const MetricCard = ({ sty, title, value, unit }) => {
  
  console.log("page", sty);
  return (
    <div className={sty == "dashboard" ? "metric-card-dashboard" : sty == "dropArea" ? "metric-card" : "multi-metric-card"}>
      <div className="metric-card-header">{title}</div>
      <div className="metric-card-value">
        {value} {unit}
      </div>
    </div>
  );
};

export default MetricCard;