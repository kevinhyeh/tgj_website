import React, { Component } from 'react';
import '../../App.css';

import cardDouble1 from '../../images/card-double-1.jpg';
import cardDouble2 from '../../images/card-double-2.jpg';

class CardComplexity extends Component {
  render() {
    return(
      <React.Fragment>
        <div>
          <p className="questions-minor">Simple or Intricate?</p>
          <div className="buttons" onClick={() => this.props.func("Simple", 0, 1)}>
            <p className="buttons-title">Simple</p>
            <p className="buttons-price">+$0</p>
            <p className="buttons-desc">Keep it simple with just an image and your contact info.</p>
          </div>
          <div className="buttons" onClick={() => this.props.func("Intricate", 50, 1)}>
            <p className="buttons-title">Intricate</p>
            <p className="buttons-price">+$50</p>
            <p className="buttons-desc">Include some flare with design tailored to you.</p>
          </div>
        </div>
        <div>
          <p className="questions-minor">One or Two Sides?</p>
          <div className="buttons" onClick={() => this.props.func("Single Side", 0, 2)}>
            <p className="buttons-title">Single Side</p>
            <p className="buttons-price">+$0</p>
            <p className="buttons-desc">Keep all your information neat on a side.</p>
          </div>
          <div className="buttons" onClick={() => this.props.func("Double Side", 50, 2)}>
            <p className="buttons-title">Double Side</p>
            <p className="buttons-price">+$100</p>
            {/*<img style={{ width: 300 }} src={cardDouble1} alt="double-sided-1" />
            <img style={{ width: 300 }} src={cardDouble2} alt="double-sided-2" />*/}
            <p className="buttons-desc">Add more design to your card by inluding another side.</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default CardComplexity;