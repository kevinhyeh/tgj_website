import React, { Component } from 'react';
import '../../App.css';

import { SketchPicker } from 'react-color';

class ColorsSec extends Component {
  render() {
    return(
      <div>
        <p className="questions-header">What are your business colors?</p>
        <div className="primary-color">
        <p className="questions-minor">Primary</p>
        <SketchPicker color={this.props.primColor} onChange={this.props.primFunc} />
        </div>
        { this.props.primColor.split('')[0] == "#" ? (
          <div className="secondary-color">
            <p className="questions-minor">Secondary (Optional)</p>
            <SketchPicker color={this.props.secColor} onChange={this.props.secFunc} />
            <div className="back-button" onClick={() => this.props.cancelFunc()}>Cancel Color</div>
          </div>
          ): null
        }
      </div>
    )
  }
}

export default ColorsSec;