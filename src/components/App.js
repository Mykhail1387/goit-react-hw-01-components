import React from 'react';
import Profile from './Profile/Profile';
import user from './jsonFiles/user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from './jsonFiles/statistical-data.json';
import FriendList from './FriendList/FriendList';
import friends from './jsonFiles/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './jsonFiles/transactions.json';


const App = () => <>
    <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
</>

export default App;