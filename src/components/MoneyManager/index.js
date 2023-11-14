import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expense: 0,
    title: '',
    amount: '',
    type: 'Income',
    transactionsList: [],
  }

  onTitleEntry = event => {
    this.setState({title: event.target.value})
  }

  onAmountEntry = event => {
    this.setState({amount: event.target.value})
  }

  onTypeEntry = event => {
    console.log(event.target.value)
    const itemType = event.target.value === 'INCOME' ? 'Income' : 'Expenses'
    this.setState({
      type: itemType,
    })
  }

  onAddEntry = () => {
    const {title, amount, type} = this.state
    const intAmount = Number(amount)
    if (title !== '' && amount !== '' && Number.isInteger(intAmount)) {
      this.setState(prevState => ({
        transactionsList: [
          ...prevState.transactionsList,
          {
            id: uuidv4(),
            title,
            amount,
            type,
          },
        ],
        income:
          type === 'Income' ? prevState.income + intAmount : prevState.income,
        expense:
          type === 'Expenses'
            ? prevState.expense + intAmount
            : prevState.expense,
        title: '',
        amount: '',
      }))
    }
  }

  onDeleteHistoryItem = (id, type, intAmount) => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        item => item.id !== id,
      ),
      income:
        type === 'Income' ? prevState.income - intAmount : prevState.income,
      expense:
        type === 'Expenses' ? prevState.expense - intAmount : prevState.expense,
    }))
  }

  render() {
    const {title, amount, transactionsList, income, expense} = this.state

    const balance = income - expense

    return (
      <div className="money-manager-container1">
        <div>
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>

        <MoneyDetails balance={balance} income={income} expense={expense} />

        <div className="data-container1">
          <div className="transaction-container1">
            <h1>Add Transaction</h1>

            <label htmlFor="TITLE">Title</label>
            <input
              id="TITLE"
              value={title}
              onChange={this.onTitleEntry}
              placeholder="TITLE"
              type="text"
            />

            <label htmlFor="AMOUNT">Amount</label>
            <input
              id="AMOUNT"
              value={amount}
              onChange={this.onAmountEntry}
              placeholder="AMOUNT"
              type="text"
            />

            <label htmlFor="TYPE">Type</label>
            <select id="TYPE" onChange={this.onTypeEntry}>
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>
            <button onClick={this.onAddEntry} type="button">
              Add
            </button>
          </div>
          <div className="history-container1">
            <h1>History</h1>
            <ul>
              <li className="history-item1">
                <p className="table-cell">Title</p>
                <p className="table-cell">Amount</p>
                <p className="table-cell">Type</p>
                <p className="table-cell" />
              </li>
              {transactionsList.map(item => {
                console.log(item)
                return (
                  <TransactionItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    amount={item.amount}
                    type={item.type}
                    onDeleteHistoryItem={this.onDeleteHistoryItem}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
