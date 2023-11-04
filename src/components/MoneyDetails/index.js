import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props

  return (
    <div className="money-details-container1">
      <div className="money-type-container1">
        <img
          className="money-type-image1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="money-type-heading1">Your Balance</p>
          <p className="money-type-para1" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="money-type-container1">
        <img
          className="money-type-image1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="money-type-heading1">Your Income</p>
          <p className="money-type-para1" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="money-type-container1">
        <img
          className="money-type-image1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="money-type-heading1">Your Expenses</p>
          <p className="money-type-para1" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
