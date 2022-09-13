import React from 'react'
import classes from './TransactionHistory.module.scss'
import { PropTypes } from 'prop-types'

const TransactionHistory = ({ items }) => {
	return (
		<table className={classes.transactionHistory}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.length && items.map(item => (
					<tr key={item.id}>
						<td>{item.type}</td>
						<td>{item.amount}</td>
						<td>{item.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

TransactionHistory.propTypes = {
	items: PropTypes.array,
}

export default TransactionHistory