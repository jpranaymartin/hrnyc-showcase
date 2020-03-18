import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import ProjectList from "./ProjectList.jsx";
import Banner from "./Banner.jsx";
const projects = require("../../data/data.json");

const App = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [displayProjectList, setDisplayProjectList] = useState(projects);

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    if (searchWord.length >= 3) {
      let newList = projects.filter((project) => {
        return (
          project.name.toUpperCase().includes(searchWord.toUpperCase()) ||
          project.mvpTitle.toUpperCase().includes(searchWord.toUpperCase()) ||
          project.mvpDescription.toUpperCase().includes(searchWord.toUpperCase())
        );
      });
      setDisplayProjectList(newList);
    } else {
      setDisplayProjectList(projects);
    }
  }, [searchWord]);

  return (
    <div className="app-content">
      <Navbar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        handleSearchChange={handleSearchChange}
      />
      <Banner />
      <ProjectList projects={displayProjectList} />
    </div>
  );
};

export default App;
