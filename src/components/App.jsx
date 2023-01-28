import user from './Profile/user.json';
import { Profile } from './Profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics';
import friends from './FriendList/friends.json';
import { FriendList } from './FriendList';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        key={user.tag}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics key="Statistics" data={data} title="Upload stats" />
      <FriendList key="Friends" friends={friends} />
      <TransactionHistory
        key="TransactionHistory"
        transactions={transactions}
      />
    </>
  );
};
