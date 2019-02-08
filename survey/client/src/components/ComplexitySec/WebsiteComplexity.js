import React, { Component } from 'react';
import '../../App.css';

class WebsiteComplexity extends Component {
  render() {
    return(
      <div>
        <div className="buttons" onClick={() => this.props.func("Single Page", 0)}>
          <p className="buttons-title">Single Page</p>
          <p className="buttons-price">+$0</p>
          <p className="buttons-desc">Keep it simple with a fluid one page website for your business.</p>
        </div>
        <div className="buttons" onClick={() => this.props.func("Multiple Pages", 200)}>
          <p className="buttons-title">Multiple Pages</p>
          <p className="buttons-price">+$200</p>
          <p className="buttons-desc">Have more to show? Add more pages for your customers to read.</p>
        </div>
      </div>
    )
  }
}

export default WebsiteComplexity;