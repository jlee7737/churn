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
  constructor(props) {
    super(props);
    this.state = {
      annualRewards : 0
    };
    this.calculateAnnualRewards = this.calculateAnnualRewards.bind(this);
  }

  calculateAnnualRewards() {
    this.setState({
      annualRewards : /* add */
                      this.props.card.redeem_bonus*100*12 +
                      this.props.card.default_bonus*100*12 + 
                      this.props.card.affiliate_bonus*100*12 + 
                      this.props.card.dining_bonus*100*12 + 
                      this.props.card.gas_bonus*100*12 + 
                      this.props.card.groceries_bonus*100*12 +
                      this.props.card.travel_bonus*100*12
                      /* minus */
                      - this.props.card.annual_fee
                      - this.props.card.foreign_trans_fee*100*12
    });
  }

  render() {
    var annualFeeInfo = "";
    if (this.props.card.annual_fee !== 0) {
      annualFeeInfo = "waived 1st year";
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
          {annualFeeInfo}
        </td>
        <td>
          {this.state.annualRewards}
        </td>
      </tr>
    );
  }
}


class CardRowDetails extends Component {
  checkBonusRate(bonusCategory) {
    if (bonusCategory === 0) {
      return 0
    }
  }

  render() {
    var cardDetailsClass = this.props.isOpen ? 'card-details open' : 'card-details';
    return ( 
      <tr id="#{card.name}" className={cardDetailsClass}>
        <td colSpan="4">
          <div className="col-xs-12 col-sm-4" style={{border: "1px solid red"}}>
            {this.props.card.name}
          </div>
          <div className="col-xs-12 col-sm-8">
            <h4>Pros</h4>
            {this.props.card.redeem_bonus*100 +"%"}
            {this.props.card.default_bonus*100 +"%"}
            {this.props.card.affiliate_bonus*100 +"%"}
            {this.props.card.dining_bonus*100 +"%"}
            {this.props.card.gas_bonus*100 +"%"}
            {this.props.card.groceries_bonus*100 +"%"}
            {this.props.card.travel_bonus*100 +"%"}
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
