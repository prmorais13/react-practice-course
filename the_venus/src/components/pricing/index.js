import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    desc: [
      'Se há uma necessidade básica para ser feliz, então devemos transforma-la em genérica',
      'Quando se está magoado, triste, ansioso ou raivoso, não há como se vislumbrar o sentimento de amor',
      'Aquiete seu coração, pois basta a cada dia o seu mal'
    ],
    linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>R${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Comprar"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
