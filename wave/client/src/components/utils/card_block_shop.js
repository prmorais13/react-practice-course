import React from 'react';

import Card from '../utils/card';

const CardBlockShop = props => {
  const rederCards = () =>
    props.list
      ? props.list.map(card => (
          <Card key={card._id} {...card} grid={props.grid} />
        ))
      : null;

  return (
    <div className="card_block_shop">
      <div>
        <div>
          {props.list ? (
            props.list.length === 0 ? (
              <div className="no_result">Desculpe, não a resultados.</div>
            ) : null
          ) : null}
          {rederCards(props.list)}
        </div>
      </div>
    </div>
  );
};

export default CardBlockShop;
