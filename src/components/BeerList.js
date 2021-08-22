import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props) {
  return (
    <>
      <hr/>
      {props.beerList.map((beer) =>
        <Beer
          whenBeerClicked={props.onBeerSelection}
          name={beer.name}
          price={beer.price}
          brand={beer.brand}
          alcoholContent={beer.alcoholContent}
          pints={beer.pints}
          id={beer.id}
          key={beer.id} />
      )}
    </>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
};

export default BeerList;