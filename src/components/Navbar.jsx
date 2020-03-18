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
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.hackreactor.com/">
          <img src={"./hrhq-avatar.png"} height="30" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <h1 className="navbar-item has-text-weight-bold is-uppercase">
            Hack Reactor-NYC
          </h1>
        </div>
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
