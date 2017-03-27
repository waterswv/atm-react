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
4. When the `Withdraw` button is clicked, you should deduct the amount entered in the text field to the balance
  - You should not be able to withdraw more than the current balance
5. If the current balance is 0, you should add a class of `zero` to the `<div className="balance">` div

## Bonus
Add the [accounting](https://www.npmjs.com/package/accounting) package to format the balance.

## Hints
- Remember to set a `ref` on the text field for targeting
- The amount entered in the text field will initially be a string, so you'll need to convert that to a number
- Don't forget to `bind` your click methods!

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
