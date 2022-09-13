import React, { useEffect, useState } from 'react'
import Profile from './components/Profile'
import user from './user.json';
import data from './data.json';
import Statistics from './components/Statistics';

const App = () => {
	const [userData, setUserData] = useState(null)

	const fetchUser = () => {
		fetch('user.json')
			.then(res => res.json())
			.then(data => setUserData(data))
	}

	useEffect(() => fetchUser, [])

	return (
		<div>
			{userData && <Profile {...userData} />}
			<Profile {...user} />
			<Statistics stats={data} />
		</div>
	)
}

export default App