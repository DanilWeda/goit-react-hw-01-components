import React, { useEffect, useState } from 'react'
import Statistics from './components/Statistics';
import Profile from './components/Profile'
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

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
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</div>
	)
}

export default App