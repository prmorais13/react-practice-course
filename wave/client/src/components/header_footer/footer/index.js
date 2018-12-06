import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faPhone,
  faClock,
  faEnvelope
} from '@fortawesome/fontawesome-free-solid';

const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">Waves</div>
        <div className="wrapper">
          <div className="left">
            <h2>Informações de Contato</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon className="icon" icon={faCompass} />
                <div className="nfo">
                  <div>Endereço</div>
                  <div>
                    Rua Parque Paraúna 79 - Nova Esperança - Parnamirim/RN
                  </div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <div className="nfo">
                  <div>Fone</div>
                  <div>(84) 98736-1339</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon className="icon" icon={faClock} />
                <div className="nfo">
                  <div>Horário de atendimento</div>
                  <div>Segunda a Sábado</div>
                  <div>Das 08 às 17 horas</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <div className="nfo">
                  <div>Email</div>
                  <div>mimosfeltro@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lef">
            <h2>Seja o primeiro a saber</h2>
            <div>
              <div>
                Veja as informações mais recentes sobre nosso trabalho, vendas e
                ofertas. Você não pode perder
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
