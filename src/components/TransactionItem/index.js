import './index.css'

const TransactionItem = props => {
  const {id, title, amount, type, onDeleteHistoryItem} = props
  const intAmount = Number(amount)

  const onClickingDelete = () => {
    onDeleteHistoryItem(id, type, intAmount)
  }

  return (
    <li className="history-item1">
      <p className="table-cell">{title}</p>
      <p className="table-cell">Rs {intAmount}</p>
      <p className="table-cell">{type}</p>
      <button
        className="table-cell delete-button1"
        onClick={onClickingDelete}
        data-testid="delete"
        type="button"
      >
        <img
          className="delete-button1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
