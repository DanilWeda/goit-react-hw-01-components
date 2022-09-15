import React from 'react'
import classes from './FriendListItem.module.scss'
import { PropTypes } from 'prop-types'

const FriendListItem = ({ avatar, name, isOnline }) => {

  return (
    <li className={classes.item}>
      <span className={isOnline ? classes.active : classes.status}></span>
      <img className={classes.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={classes.name}>{name}</p>
    </li >
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem
