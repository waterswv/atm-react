import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
      super(props)
    this.state = {
      balance: 0
    }
  }
  handleDepositEvent (event) {
    event.preventDefault()
    let amount = Number(this.inputBox.value);
    let newBalance = amount + this.state.balance;

    this.setState({balance: newBalance});
    this.inputBox.value = "";
  }

  handleWithdrawlEvent (event) {
    event.preventDefault()
    let amount = Number(this.inputBox.value);

    if (amount < this.state.balance) {
      let newBalance = this.state.balance - amount;
      this.setState({balance: newBalance});
      this.inputBox.value = "";
    }
    else {
    this.inputBox.value = "";
    alert('Insufficent Funds, please enter an amount <= to your balance');
    }
  }

  render() {
      // set the default class to `balance` for the balanceClass.
    let balanceClass = 'balance';
    // if the balance is 0, then add the class zero to balanceClass
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(event) => this.handleDepositEvent(event)}/>
        <input type="button" value="Withdraw" onClick={(event) => this.handleWithdrawlEvent(event)}/>
      </div>
    )
  }
}
