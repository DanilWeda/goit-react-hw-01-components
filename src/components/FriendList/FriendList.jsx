import React from 'react'
import classes from './FriendList.module.scss'
import { PropTypes } from 'prop-types'
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {

  return (
    <ul className={classes.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })),
}

export default FriendList
