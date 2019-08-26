import React from 'react';
import axios from 'axios';

const ProjectCard = ({project}) => {
  return (
    <div>
      <img src={project.img_url} height="240" width="320"/>
      <h2>{project.title}</h2>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    axios.get('/data/data.json').then(({ data }) => {
      const projects = data.slice(1)
      console.log('data', projects[0]);
      this.setState({ projects });
    });
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        {projects.map(project => {
          return <ProjectCard project={project}/>
        })}
      </div>
    );
  }
}

export default App;
