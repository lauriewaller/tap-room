import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import EditBeerForm from './EditBeerForm';

class TapRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      selectedBeer: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBeer: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newBeerList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({ selectedBeer: selectedBeer });
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing:true});
  }

  handleEditingBeerInList = (beerToEdit) => {
    const editedMasterBeerList = this.state.masterBeerList
      .filter(beer => beer.id !== this.state.selectedBeer.id)
      .concat(beerToEdit);
    this.setState({
        masterBeerList: editedMasterBeerList,
        editing: false,
        selectedBeer: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditBeerForm Beer = {this.state.selectedBeer} onEditBeer = {this.handleEditingBeerInList} />
      buttonText = "Return to Beer List";
    } else if (this.state.selectedBeer != null) {
      currentlyVisibleState = <BeerDetail Beer={this.state.selectedBeer} onClickingDelete={this.handleDeletingBeer} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Beer List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBeerForm onNewBeerCreation={this.handleAddingNewBeerToList} />;
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState = <BeerList beerList={this.state.masterBeerList} />;
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