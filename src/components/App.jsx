import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import ProjectList from "./ProjectList.jsx";
import Banner from "./Banner.jsx";
const projects = require("../../data/data.json");

const App = (props) => {
  const [searchWord, setSearchWord] = useState("");
  const [displayProjectList, setDisplayProjectList] = useState(projects);

  const handleSearchChange = (e) => {
    setSearchWord(e.target.value.toUpperCase());
  };

  const handleRegButtonClick = () => {};

  useEffect(()=>{
    if(searchWord.length > 3){
      let newList = projects.filter((project)=>{
        return (project.name.toUpperCase().includes(searchWord) || project.mvpTitle.toUpperCase().includes(searchWord) || project.mvpDescription.toUpperCase().includes(searchWord))
      })
      setDisplayProjectList(newList);
    }else{
      setDisplayProjectList(projects);
    }
  },[searchWord]);

  return (
    <div className="app-content">
      <Navbar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        handleSearchChange={handleSearchChange}
        handleRegButtonClick={handleRegButtonClick}
      />
      <Banner />
      <ProjectList projects={displayProjectList}/>
    </div>
  );
};

export default App;
