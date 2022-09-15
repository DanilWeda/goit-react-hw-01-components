import React from 'react'
import classes from './Profile.module.scss'
import { PropTypes } from 'prop-types'

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {

  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={classes.avatar}
        />
        <p className={classes.name}>{username}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>

      <ul className={classes.stats}>
        <li>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{followers}</span>
        </li>
        <li>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{views}</span>
        </li>
        <li>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }),

}

export default Profile
