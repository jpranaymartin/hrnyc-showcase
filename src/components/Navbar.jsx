import React, { useState } from "react";
import RegisterModal from "./RegisterModal.jsx";

const Navbar = (props) => {
  const [registerModalActive, setRegisterModalActive] = useState(false);

  const toggleModal = () => {
    setRegisterModalActive(!registerModalActive);
  };

  return (
    <nav
      className="navbar is-transaprent is-fullwidth"
      role="navigation"
      aria-label="main navigation"
      style={{paddingTop:"1vh",paddingBottom:"1vh"}}
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.hackreactor.com/">
          <img src={"./hack-reactor-logo.png"} />
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field">
            <p className="control has-icons-right">
              <input
                className="input is-rounded"
                type="text"
                value={props.searchWord}
                placeholder="Search..."
                onChange={props.handleSearchChange}
              />
              <span className="icon is-small is-right">
                <i className="fas fa-search"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="navbar-item">
          <button className="button is-active is-rounded" onClick={toggleModal}>
            <strong>Register a Project!</strong>
          </button>
          <RegisterModal toggleModal={toggleModal} registerModalActive={registerModalActive}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
