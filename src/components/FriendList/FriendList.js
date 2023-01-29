import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendItem';
import { FriendListUl } from './FriendList.module';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(item => (
        <FriendItem key={item.id} item={item} />
      ))}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
