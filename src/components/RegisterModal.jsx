import React from "react";

const RegisterModal = (props) => {
  return (
    <div className={`modal ${props.registerModalActive ? "is-active" : null}`}>
      <div className="modal-background" onClick={props.toggleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Instructions on Registering a Project!</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.toggleModal}
          ></button>
        </header>

        <section className="modal-card-body">
          <p>To register a project you must complete the following steps:</p>
          <br />
          <ul style={{ listStyleType: "circle", marginLeft:"1vw" }}>
            <li>Pull down the repo from SOURCE</li>
            <li>Open the data.json file under the data directory</li>
            <li>
              Add a new object in the array and input the required fields,{" "}
              <strong>
                ensure that all links are working and the image link is correct
              </strong>
            </li>
            <li>Add all of the changes in git and commit the changes!</li>
            <li>Push the repo back up to SOURCE</li>
          </ul>
        </section>

        <footer className="modal-card-foot">
          <button className="button" onClick={props.toggleModal}>
            Got It!
          </button>
        </footer>
      </div>
    </div>
  );
};

export default RegisterModal;
