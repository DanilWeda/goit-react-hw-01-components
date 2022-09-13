import React from 'react'
import classes from './Statistics.module.scss'
import { PropTypes } from 'prop-types'

const Statistics = ({ title, stats }) => {

	return (
		<section className={classes.statistics}>
			<h2 className={classes.title}>{title || "Upload stats"}</h2>

			<ul className={classes.statList}>
				{stats.length && stats.map(stat => (
					<li key={stat.id} className={classes.item}>
						<span className={classes.label}>{stat.label}</span>
						<span className={classes.percentage}>{stat.percentage}</span>
					</li>
				))}
			</ul>
		</section>
	)
}

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.array,
}

export default Statistics