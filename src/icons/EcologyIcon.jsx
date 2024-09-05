
import React from "react";

import Ecology from "../assets/ecology/selection.json";
import IcomoonReact from "icomoon-react";

const EcologyIcon = (props) => {
  const { color, size = "100%", className = "" } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={Ecology} 
      color={color}
      size={size}
    />
  );
};

export default EcologyIcon;