import React, { Component } from 'react';
import '../../App.css';

class ProjectInfoSec extends Component {
  render() {
    const projectsList = this.props.projects.map(project => {
      return (
        <React.Fragment>
        { project.project == "Other" ? (
          <div className="buttons buttons-proj" onClick={() => this.props.chooseProjFunc(project.project, project.price)} key={project._id}>
            <p className="buttons-title">{project.project}</p>
            { this.props.other ? (
              <React.Fragment>
                <input className="other-input" type="text" value={this.props.otherProj} placeholder="e.g. T-shirt Design" onChange={e => this.props.inputTextFunc(e, "otherProj")} />
                <button onClick={() => this.props.chooseProjFunc(this.props.otherProj, project.price)}>&#62;</button>
              </React.Fragment>
              ): null
            }
            <p className="buttons-price">{project.price}</p>
            <p className="buttons-desc">{project.description}</p>
          </div>
          ) : (
          <div className="buttons buttons-proj" onClick={() => this.props.chooseProjFunc(project.project, project.price)} key={project._id}>
            <p className="buttons-title">{project.project}</p>
            <p className="buttons-price">${project.price}</p>
            <p className="buttons-desc">{project.description}</p>
          </div>
          )
        }
        </React.Fragment>
      ) 
    });
    return(
      <div>
        <p className="questions-header">What would you like to start with us?</p>
        {projectsList}
      </div>
    )
  }
}

export default ProjectInfoSec;