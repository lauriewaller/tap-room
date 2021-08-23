import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props){
  const { beer, onClickingDelete, onClickingSoldBeer } = props; 

  return (
    <>
      <h1>Beer Details</h1>
      <h3>Name: {beer.name}</h3>
      <p>Brand: {beer.brand}</p>
      <p>Price: ${beer.price}</p>
      <p>Alcohol Content: {beer.alcoholContent}</p> 
      {/* <div style={{display: "block"}}> */}
      <p>Pints Remaining: {beer.pints}</p> 
      <button onClick={()=> onClickingSoldBeer(beer.id) }>Sell a pint</button>
      <hr/>
      <button onClick={ props.onClickingEdit }>Edit Beer Data</button>
      <button onClick={()=> onClickingDelete(beer.id) }>Delete Beer</button> 
      <hr/>
    </>
  );
}

BeerDetail.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default BeerDetail;