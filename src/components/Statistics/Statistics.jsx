import React from 'react'
import classes from './Statistics.module.scss'
import { PropTypes } from 'prop-types'

const Statistics = ({ title, stats }) => {

  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      <ul className={classes.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={classes.item}>
            <span className={classes.label}>{label}</span>
            <span className={classes.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    title: PropTypes.string
  })),
}

export default Statistics
