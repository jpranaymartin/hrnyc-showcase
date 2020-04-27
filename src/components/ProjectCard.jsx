import React,{useState} from "react";
import ProjectModal from "./ProjectModal.jsx";

const ProjectCard = (props) => {
  const [modalActive, setModalActive] = useState(false);

  const toggleModal = ()=>{
    setModalActive(!modalActive);
  }

  return (
    <div class="card" style={{ flex: "0 0 31%", margin: "1vh"}}>
      <div class="card-image" style={{padding: "10px"}}>
        <figure class="image is-4by3" style={{border: "1px solid #9e9e9e"}}>
          <img src={props.project.imgLink} alt="Placeholder image" onClick={toggleModal} style={{cursor:"pointer"}}/>
        </figure>
      </div>

      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{props.project.mvpTitle}</p>
            <p class="subtitle is-6">By: {props.project.name}</p>
          </div>
        </div>
      </div>
      <ProjectModal project={props.project} modalActive={modalActive} toggleModal={toggleModal}/>
    </div>
  );
};

export default ProjectCard;
