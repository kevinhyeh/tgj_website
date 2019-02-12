import React, { Component } from 'react';
import '../../App.css';

class SmallButtons extends Component {
  render() {
    return(
      <div>
        { this.props.steps > 0 && this.props.steps < 6 ?
          <div className="back-button" onClick={() => this.props.backFunc()}>Back</div>
        : null
        }
        { this.props.steps == 2 ? 
          <div className="small-button next-button" onClick={() => this.props.noInputFunc("projDesc")}>Next</div>
        : this.props.steps == 3 ?
          <div className="small-button next-button" onClick={() => this.props.noInputFunc("businessName")}>Next</div>
        : this.props.steps == 4 ?
          <div className="small-button next-button" onClick={() => this.props.noInputFunc("primColor")}>Next</div>
        : this.props.steps == 5 ?
          <div className="small-button next-button" onClick={() => this.props.submitFunc()}>Submit</div>
        : null
        }
      </div>
    )
  }
}

export default SmallButtons;