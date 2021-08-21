import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';

class TapRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm />;
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = <BeerList />;
      buttonText = "Enter New Beer";
    }

    return (
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default TapRoom;