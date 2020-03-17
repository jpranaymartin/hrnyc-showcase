import React from "react";

const ProjectModal = (props) => {
  return (
    <div className={`modal ${props.modalActive ? "is-active" : null}`}>
      <div className="modal-background" onClick={props.toggleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p class="modal-card-title">{props.project.mvpTitle}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.toggleModal}
          ></button>
        </header>

        <section className="modal-card-body">
          <div class="content">
            <img src={props.project.imgLink} alt="Picture Not Included" />
            <br/>
            By: {props.project.name}
            <br />
            {props.project.mvpDescription}
            <br />
          </div>
        </section>

        <footer className="modal-card-foot">
          <a href={props.project.linkToProject} class="card-footer-item">
            Explore The Project
          </a>
          <a href={props.project.linkToRepo} class="card-footer-item">
            Engineer's Repo
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectModal;
