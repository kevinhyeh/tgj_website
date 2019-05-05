import React, { Component } from 'react';
import '../../App.css';

class WebsiteComplexity extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p className="questions-minor">Web Builder or Fully Custom?</p>
          <div className="buttons" onClick={() => this.props.func("Web Builder", 0, 1)}>
            <p className="buttons-title">Web Builder</p>
            <p className="buttons-price">+$0</p>
            <p className="buttons-desc">Using a third party service to design your website. Less options but will get the job done.</p>
          </div>
          <div className="buttons" onClick={() => this.props.func("Fully Custom", 400, 1)}>
            <p className="buttons-title">Fully Custom</p>
            <p className="buttons-price">+$200</p>
            <p className="buttons-desc">Have your website fully custom by a developer where we can provide wonderous features.</p>
          </div>
        </div>
        <div>
          <p className="questions-minor">How many pages?</p>
          <div className="buttons" onClick={() => this.props.func("Single Page", 0, 2)}>
            <p className="buttons-title">Single Page</p>
            <p className="buttons-price">+$0</p>
            <p className="buttons-desc">Keep it simple with a fluid one page website for your business.</p>
          </div>
          <div className="buttons" onClick={() => this.props.func("Multiple Pages", 100, 2)}>
            <p className="buttons-title">Multiple Pages</p>
            <p className="buttons-price">+$100 per page</p>
            <p className="buttons-desc">Have more to show? Add more pages for your customers to read.</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default WebsiteComplexity;