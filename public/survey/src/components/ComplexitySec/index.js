import React, { Component } from 'react';
import '../../App.css';

import LogoComplexity from './LogoComplexity';
import CardComplexity from './CardComplexity';
import WebsiteComplexity from './WebsiteComplexity';

class ComplexitySec extends Component {
  render() {
    return(
      <div>
        <p className="questions-header">How complex would you like your {this.props.project.toLowerCase()} be?</p>
        { this.props.project === "Custom Logo" ? (
          <LogoComplexity func={this.props.func} />
          ) : this.props.project === "Business Card" ? (
          <CardComplexity func={this.props.func} />
          ) : this.props.project === "Website" ? (
          <WebsiteComplexity func={this.props.func} />
          ) : null
        }
      </div>
    )
  }
}

export default ComplexitySec;