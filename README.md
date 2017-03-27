# ATM application

Let's make an ATM app! 

Clone this repo, and run `npm install`. To launch the app, run `npm 

### In `src/App.js`:
1. Pass a `name` property to each `Account` component, one for "Checking", the other for "Savings".  These will be used and accessed as `props`for our component. **Remember**: Props are immutable, that is, once they are declared, they cannot be changed while the application is running.

    ```javascript
        <div>
          <Account name="Checking"/>
          <Account name="Savings"/>
        </div>
    ```

### In `src/Account.js`
1. Use the property you set in `App.js` and add it to the `<h2>`
    <details>
    <summary>Hint:</summary>

    ```javascript
        <div className="account">
          //this.props.name is referring to the name property we assigned the App component in App.js
          <h2>{this.props.name}</h2>
          <div className="balance">$0</div>
          <input type="text" placeholder="enter an amount" />
          <input type="button" value="Deposit" />
          <input type="button" value="Withdrawl" />
        </div>
    ```

    </details>

    Save your work. You should see two 'widgets' named Deposit and Withdrawl.  You're getting there!

2. Add a `balance` property to `state` and set to 0 initially
    <details>
    <summary>Hint:</summary>

    ```javascript
        class Account extends Component {
            constructor(props){
              super(props)
              this.state = {
                balance: 0
              }
            }
        }
    ``` 

    </details>

3. When the `Deposit` button is clicked, you should add the amount entered in the text field to the balance
    <details>
    <summary>Hint:</summary>
    a. Add a click handler in your input tags in our JSX return block:
    
    ```html
      <input type="button" value="Deposit" onClick={this.handleDepositClick} />
    ```
    
    b. Define a click handler method within the `Account` class
    
    ```javascript
      handleDepositClick(e) {
        // It is good practice to still prevent default behavior
        e.preventDefault()
        // set a local variable to the amount entered in the text box.  What does that + symbol do?
        let amount = +this.refs.amount.value
        // set a local variable to the new balance based off of the original balance + amoun
        let newBalance = this.state.balance + amount;
        // set the balance to the newBalance using the setState method (necessary)
        this.setState({
          balance: newBalance
        })
        // empty out the text box in this component
        this.refs.amount.value = '';
      }
    ```

    c. Don't forget to `bind` your click methods inside your constructor!
        
    ```javascript  
          
        this.handleDepositClick = this.handleDepositClick.bind(this)
        this.handleWithdrawlClick = this.handleWithdrawlClick.bind(this)  
          
     ```
        

    </details>
    
    
    
4. When the `Withdraw` button is clicked, you should deduct the amount entered in the text field to the balance.  **You should not be able to withdraw more than the current balance**

    <details>
    <summary>Hint:</summary>
    
      Try to mirror the functionality of the Deposit function above.
    
    </details>


5. If the current balance is 0, you should add a class of `zero` to the `<div className="balance">`.
    <details>
    <summary>Hint:</summary>
        In the Account.js render method:
    
    ```javascript
      // set the default class to `balance` for the balanceClass.
      let balanceClass = 'balance';
      // if the balance is 0, then add the class zero to balanceClass
      if (this.state.balance === 0) {
        balanceClass += ' zero';
      }
    ```  
     
    <p>Replace the hardcoded `balance` class with the balanceClass variable in your return jsx code block:</p>
    
    ```html
        <div className={balanceClass}>$0</div>
    ```
    
    </details>
    ## Bonus ##
        Add the [accounting](https://www.npmjs.com/package/accounting) package to format the balance.

   
        Remember to set a `ref` on the text field for targeting
        The amount entered in the text field will initially be a string, so you'll need to convert that to a number


## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
