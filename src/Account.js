import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this._handleDepositClick = this._handleDepositClick.bind(this)
  }

  _handleDepositClick(e) {
    e.preventDefault()
    let amount = +this.refs.amount.value
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.refs.amount.value = '';
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this._handleDepositClick} />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}
