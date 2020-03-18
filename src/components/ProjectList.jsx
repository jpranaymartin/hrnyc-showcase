import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const ProjectList = (props) => {
  return (
    <div
      className="container is-fluid"
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: "2vw",
        marginTop: "10vh",
        justifyContent: "space-evenly"
      }}
    >

      {props.projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ProjectList;
