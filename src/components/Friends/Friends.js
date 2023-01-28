import PropTypes from 'prop-types';
import {
  FriendList,
  FriendItem,
  FriendSpan,
  FriendImg,
  FriendName,
} from './Friends.module';

export const Friends = ({ friends }) => {
  return <FriendList>{friends.map(item => friendItem({ item }))}</FriendList>;
};

function friendItem({ item }) {
  const { avatar, name, isOnline, id } = item;
  return (
    <FriendItem key={id}>
      <FriendSpan value={isOnline} />
      <FriendImg src={avatar} alt={name} width="48px" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
