import React, { Component } from 'react';
import '../../App.css';

class BusinessInfoSec extends Component {
  render() {
    return(
      <div>
        <p className="questions-header">Tell Us About Your Business</p>
        <div style={{ display: "inline-block", marginRight: 50 }}>
          <p className="questions-minor">What's the name of your business?</p>
          <input className="inputs" type="text" placeholder="e.g. The Graphic Jar" onChange={e => this.props.func(e, "businessName")} value={this.props.businessName} />
        </div>
        <div style={{ display: "inline-block" }}>
          <p className="questions-minor">Do you have a website for your business?</p>
          <input className="inputs" type="text" placeholder="e.g. thegraphicjar.com" onChange={e => this.props.func(e, "businessWeb")} value={this.props.businessWeb} />
        </div>
        <p className="questions-minor">What is your business?</p>
        <textarea className="textarea" rows="6" placeholder="Describe Business Here" onChange={e => this.props.func(e, "businessDesc")} value={this.props.businessDesc} />
        <p className="questions-minor">Do you have a motto/slogan?</p>
        <textarea className="textarea" rows="4" placeholder="Add Motto/Slogan Here" onChange={e => this.props.func(e, "businessSlogan")} value={this.props.businessSlogan} />
      </div>
    )
  }
}

export default BusinessInfoSec;