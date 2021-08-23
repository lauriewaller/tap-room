import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  const { beer } = props;
  let name;
  let brand;
  let price;
  let alcoholContent;

  if (beer !== undefined) {
    name = beer.name;
    brand = beer.brand;
    price = beer.price;
    alcoholContent = beer.alcoholContent;
  }

  return (
    <>
    <form onSubmit={props.formSubmissionHandler}>
      <input 
      type='text'
      name='name'
      defaultValue={name}
      placeholder='Name'/>
      <input 
      type='text'
      name='brand'
      defaultValue={brand}
      placeholder='Brand'/>
      <input 
      type='text'
      name='price'
      defaultValue={price}
      placeholder='Price' />
      <input 
      type='text'
      name='alcoholContent'
      defaultValue={alcoholContent}
      placeholder='Alcohol content'/>
      <button type='submit'>{props.buttonText}</button>
    </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  beer: PropTypes.object
};

export default ReusableForm;