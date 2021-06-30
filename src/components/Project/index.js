import React from "react";
import "./style.css";

function Project(props) {
  console.log(props)
  return (
    <div className="project text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Project;