import {
  FriendItemLi,
  FriendSpan,
  FriendImg,
  FriendName,
} from './FriendItem.module';

export const FriendItem = ({ item }) => {
  const { avatar, name, isOnline, id } = item;
  return (
    <FriendItemLi key={id}>
      <FriendSpan value={isOnline} />
      <FriendImg src={avatar} alt={name} width="48px" />
      <FriendName>{name}</FriendName>
    </FriendItemLi>
  );
};
