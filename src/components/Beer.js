import React from "react";
import PropTypes from "prop-types";

function Beer(props){ 
  return (
    <>
      <div onClick = {() => props.whenBeerClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.brand}</p>
      <p>{props.price}</p>
      <p>{props.alcoholContent}</p>
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
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}; 

export default Beer;