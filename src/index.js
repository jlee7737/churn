import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

// add import csv cards_data file using csvtojson
var cards_data = [
    {
        issuer: "Barclaycard",
        name: "Arrival",
        intro_offer: 250,
        redeem_value: 0.05,
        default_value: 0.01,
        affiliate_value: 0.00,
        dining_value: 0.02,
        gas_value: 0.00,
        groceries_value: 0.00,
        travel_value: 0.02,
        annual_fee: 89,
        foreign_trans_fee: 0.00
    },
    {
        issuer: "Bank of America",
        name: "Cash Rewards",
        intro_offer: 100,
        redeem_value: 0.10,
        default_value: 0.01,
        affiliate_value: 0.00,
        dining_value: 0.00,
        gas_value: 0.03,
        groceries_value: 0.02,
        travel_value: 0.00,
        annual_fee: 0,
        foreign_trans_fee: 0.03
    },
]

// render app to DOM element id="root"
ReactDOM.render(
  <App cards={cards_data} />,
  document.getElementById('root')
);