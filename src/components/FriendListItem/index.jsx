import React from 'react'
import classes from './FriendListItem.module.scss'
import { PropTypes } from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline }) => {
	const statusClass = isOnline ? classes.active : '';

	return (
		<li className={classes.item}>
			<span className={`${classes.status} ${statusClass}`}></span>
			<img className={classes.avatar} src={avatar} alt="User avatar" width="48" />
			<p className={classes.name}>{name}</p>
		</li >
	)
}

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string,
	isOnline: PropTypes.bool,
}

export default FriendListItem