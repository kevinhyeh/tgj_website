import React, { Component } from 'react';
import '../../App.css';

class ProjectInfoSec extends Component {
  render() {
    return(
      <div>
        <p className="questions-header">Tell Us More About The Project</p>
        <div style={{ display: "inline-block", marginRight: 50 }}>
          <p className="questions-minor">What is your budget for this {this.props.project.toLowerCase()}?</p>
          <input className="inputs" type="text" placeholder="e.g. $500" onChange={e => this.props.func(e, "projBudget")} value={this.props.projBudget} />
        </div>
        <div style={{ display: "inline-block" }}>
          <p className="questions-minor">Do you have a timeline for this project?</p>
          <input className="inputs" type="text" placeholder="e.g. 1 month" onChange={e => this.props.func(e, "projTimeline")} value={this.props.projTimeline} />
        </div>
        <p className="questions-minor">Describe your project</p>
        <textarea className="textarea" rows="6" placeholder="Describe Project Here" onChange={e => this.props.func(e, "projDesc")} value={this.props.projDesc} />
      </div>
    )
  }
}

export default ProjectInfoSec;