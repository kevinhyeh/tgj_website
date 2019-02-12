import React, { Component } from 'react';
import '../../App.css';

import cardDouble1 from '../../images/card-double-1.jpg';
import cardDouble2 from '../../images/card-double-2.jpg';

class CardComplexity extends Component {
  render() {
    return(
      <div>
        <div className="buttons" onClick={() => this.props.func("Single Side", 0)}>
          <p className="buttons-title">Single Side</p>
          <p className="buttons-price">+$0</p>
          <p className="buttons-desc">Keep all your information neat on a side.</p>
        </div>
        <div className="buttons" onClick={() => this.props.func("Double Side", 100)}>
          <p className="buttons-title">Double Side</p>
          <p className="buttons-price">+$100</p>
          <img style={{ width: 300 }} src={cardDouble1} alt="double-sided-1" />
          <img style={{ width: 300 }} src={cardDouble2} alt="double-sided-2" />
          <p className="buttons-desc">Add more design to your card by inluding another side.</p>
        </div>
      </div>
    )
  }
}

export default CardComplexity;