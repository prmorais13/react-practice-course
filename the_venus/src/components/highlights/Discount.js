import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = ({ discountStart, discountEnd } = this.state) => {
    if (discountStart < discountEnd) {
      this.setState({
        discountStart: ++discountStart
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Compra de ingressos antes de 20 de DEZEMBRO</h3>
              <p>
                Adqurindo os ingressos antes do dia 20 de dezembro, o desconto
                será porporcional a quantidade comprada podendo chegar ao máximo
                de {this.state.discountStart}%.
              </p>

              <div>Button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
