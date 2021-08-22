import React from "react";
import PropTypes from "prop-types";

function BeerDetail(props){
  const { beer, onClickingDelete } = props; 

  return (
    <>
      <h1>Beer Details</h1>
      <h3>{beer.name}</h3>
      <p>{beer.brand}</p>
      <p>{beer.price}</p>
      <p>{beer.alcoholContent}</p>
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