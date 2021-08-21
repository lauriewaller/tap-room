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

  handleAddingNewBeerToList = (newBeer) => {
    const newBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newBeerList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList}/>;
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