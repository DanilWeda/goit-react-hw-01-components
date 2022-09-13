import React from 'react'
import classes from './FriendList.module.scss'
import { PropTypes } from 'prop-types'
import FriendListItem from '../FriendListItem'

const FriendList = ({ friends }) => {

	return (
		<ul className={classes.friendList}>
			{friends.length && friends.map(friend => <FriendListItem key={friend.id} {...friend} />)}
		</ul>
	)
}

FriendList.propTypes = {
	friends: PropTypes.array,
}

export default FriendList