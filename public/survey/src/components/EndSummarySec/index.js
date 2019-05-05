import React, { Component } from 'react';
import '../../App.css';

class EndSummarySec extends Component {
  render() {
    return(
      <div>
        <p className="questions-header">Thank you! Your project has been sent!</p>
        <p className="questions-minor">Below is your project summary, which has also been emailed to {this.props.contactEmail}</p>
        <div className="end-summary-sec">
          <p><span className="end-summary-title">Estimated Project Price:</span> ${this.props.finalPrice}</p>
          <p><span className="end-summary-title">Project:</span> {this.props.project} ${this.props.projPrice}</p>
          <p><span className="end-summary-title">Complexity:</span> {this.props.complexity1} ${this.props.compPrice1}<br></br>{this.props.complexity2} ${this.props.compPrice2} </p>
          <p><span className="end-summary-title">Budget:</span> {this.props.projBudget}</p>
          <p><span className="end-summary-title">Timeline:</span> {this.props.projTimeline}</p>
          <p><span className="end-summary-title">Project Description:</span> {this.props.projDesc}</p>
        </div>
        <div className="end-summary-sec">
          <p><span className="end-summary-title">Business Name:</span> {this.props.businessName}</p>
          <p><span className="end-summary-title">Business Website:</span> {this.props.businessWeb}</p>
          <p><span className="end-summary-title">Business Description:</span> {this.props.businessDesc}</p>
          <p><span className="end-summary-title">Business Slogan:</span> {this.props.businessSlogan}</p>
          <p><span className="end-summary-title">Color(s):</span> {this.props.primColor}, {this.props.secColor}</p>
        </div>
        <div className="end-summary-sec">
          <p><span className="end-summary-title">Contact Name:</span> {this.props.contactName}</p>
          <p><span className="end-summary-title">Contact Email:</span> {this.props.contactEmail}</p>
          <p><span className="end-summary-title">Contact Number:</span> {this.props.contactNumber}</p>
          <p><span className="end-summary-title">Contact Message:</span> {this.props.contactMessage}</p>
        </div>
        <div>
          <p className="questions-minor">Add another project?</p>
          <div className="small-button" onClick={() => this.props.func("yes")}>Yes!</div>
          <div className="small-button next-button" onClick={() => this.props.func("no")}>I'm ok!</div>
        </div>
      </div>
    )
  }
}

export default EndSummarySec;