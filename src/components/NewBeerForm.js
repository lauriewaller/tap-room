import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewBeerForm(props) {
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewBeerSubmission}
        buttonText="Submit!" />
    </>
  );

  function handleNewBeerSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({ name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, id: v4() })
    console.log(event.target.name.value);
    console.log(event.target.alcoholContent.value);
  }
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
