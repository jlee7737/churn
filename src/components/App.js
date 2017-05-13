import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


class UserAccounts extends Component {
  render() {
    return (
      <p>user accounts</p>
    );
  }
}


class UserInput extends Component {
  render() {
    return (
      <p>user input</p>
    );
  }
}


class CardRowMain extends Component {
  render() {
    var annual_fee_info = "";
    if (this.props.card.annual_fee !== 0) {
      annual_fee_info = "waived 1st year";
    }
    return ( 
      <tr className="card-main" onClick={this.props.onClick}>
        <td>
          {this.props.card.issuer}<br />
          {this.props.card.name}
        </td>
        <td>
          {this.props.card.intro_offer}
        </td>
        <td>
          {this.props.card.annual_fee}<br />
          {annual_fee_info}
        </td>
        <td>
          {this.props.card.intro_offer}
        </td>
        <td>
          test
        </td>
      </tr>
    );
  }
}


class CardRowDetails extends Component {
  render() {
    var cardDetailsClass = this.props.isOpen ? 'card-details open' : 'card-details';
    return ( 
      <tr id="#{card.name}" className={cardDetailsClass}>
        <td colSpan="5" style={{backgroundColor: "#0069cd"}}>
          <div style={{backgroundColor: "#fff"}}>
            {this.props.card.name}
          </div>
        </td>
      </tr>
    )
  }
}


class CardRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsOpen : false
    };
    this.handleOpenDetails = this.handleOpenDetails.bind(this);
  }

  handleOpenDetails() {
    this.setState({
      detailsOpen : !this.state.detailsOpen
    });
  }

  render() {
    var card = this.props.card
    return ( 
      <tbody className="card-row">
        <CardRowMain card={card} key={card.name} onClick={this.handleOpenDetails} />
        <CardRowDetails card={card} key={card.name + "details"} isOpen={this.state.detailsOpen} />
      </tbody>
    )
  }
}


class CardsTable extends Component {
  buildCardRows(cardsData) {
    var cardRows = [];
    cardsData.forEach(function(card) {
      cardRows.push(<CardRow card={card} key={card.name} />);
    });
    return cardRows;
  }

  render() {
    var cardRows = this.buildCardRows(this.props.cardsData);
    return (
      <table className="table table-hover">
        <caption>Best credit cards based on your category spending habits</caption>
        <thead>
          <tr>
            <th>Issuer / Card</th>
            <th>Intro Offer</th>
            <th>Annual Fee</th>
            <th>First-Year Rewards</th>
            <th>Annual Rewards</th>
          </tr>
        </thead>
        { cardRows }
      </table>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="container">
        <UserAccounts />
        <UserInput />
        <CardsTable cardsData={this.props.cards} />
      </div>
    );
  }
}

export default App;
