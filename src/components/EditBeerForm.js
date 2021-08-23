import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditBeerForm(props){
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: beer.pints, id: beer.id});
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Edit Beer" />
    </>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;