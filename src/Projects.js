import React, { Component } from 'react';
import './Projects.css';
import projects from './projects.json';
import git from './github.png';
import link from './link.png';

class Projects extends Component {
  state = {
    projects: projects
  }

  renderStackList = (tech) => {
    return (
      <ul>
        {tech.map((li) => {
          return <li>{li}</li>
        })}
      </ul>
    )
  }

  renderProjects = () => {
    const { projects } = this.state;
    return projects.map((item) => {
      return (
        <div className="Projects-item-container">
          <h4>{item.name}</h4>
          <p className="Projects-item-text">{item.text}</p>
          <p className="Projects-item-tech">Technologies used for this project {item.tech && this.renderStackList(item.tech)}</p>
          <a href={item.link}>
            <img className="Projects-item-git" src={git} alt="git"/>Repository
          </a>
          <div>
            <a href={item.link}>
              <img className="Projects-item-git" src={link} alt="link"/>Check it out
            </a>
          </div>
        </div>
      )
    })
  }


  render() {
    return (
      <div>
        <div>
          <p>*I have only listed my hobby projects here, some of them are pretty old and some of them are not finished, but I like them and they all show my progress as a developer. Node projects are in private repositories.</p>
        </div>
        <div className="Projects-container">
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
