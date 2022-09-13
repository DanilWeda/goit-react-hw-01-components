import React, { useEffect, useState } from 'react'
import Profile from './components/Profile'
import user from './user.json';

const App = () => {
	const [userData, setUserData] = useState(null)
	console.log(user)

	const fetchUser = () => {
		fetch('user.json')
			.then(res => res.json())
			.then(data => setUserData(data))
	}

	useEffect(() => fetchUser, [])

	return (
		<div>
			{userData && <Profile {...userData} />}
			{user && <Profile {...user} />}
		</div>
	)
}

export default App