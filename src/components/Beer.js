import React from "react";
import PropTypes from "prop-types";

function Beer(props){ 
  return (
    <>
      <div onClick = {() => props.whenBeerClicked(props.id)}>
      <h3>Name: {props.name}</h3>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
      <p>Alcohol Content: {props.alcoholContent}</p>
      <p>Pints Remaining: {props.pints}</p>
      <hr/>
      </div>
    </>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alcoholContent: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}; 

export default Beer;