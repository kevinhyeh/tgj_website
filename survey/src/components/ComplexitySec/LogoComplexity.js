import React, { Component } from 'react';
import '../../App.css';

import logoSimple from '../../images/logo-simple.jpg';
import logoIntricate from '../../images/logo-intricate.png';

class LogoComplexity extends Component {
  render() {
    return(
      <div>
        <div className="buttons" onClick={() => this.props.func("Simple", 0, 1)}>
          <p className="buttons-title">Simple</p>
          <p className="buttons-price">+$0</p>
          {/*<img className="logo-simple" src={logoSimple} alt="simple-logo" />*/}
          <p className="buttons-desc">Has two or less elements for your logo.</p>
        </div>
        <div className="buttons" onClick={() => this.props.func("Complicated", 50, 1)}>
          <p className="buttons-title">Intricate</p>
          <p className="buttons-price">+$50</p>
          {/*<img className="logo-intricate" src={logoIntricate} alt="intricate-logo" />*/}
          <p className="buttons-desc">Has two or more elements for your logo.</p>
        </div>
      </div>
    )
  }
}

export default LogoComplexity;