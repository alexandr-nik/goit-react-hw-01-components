import PropTypes from 'prop-types';
import {
  ProfileFrame,
  ProfileWrap,
  ProfileImg,
  ProfileDesc,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatsList,
  ProfileStatsLable,
  ProfileStatsQuantity,
} from './Profile.module';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <ProfileFrame>
      <ProfileWrap>
        <ProfileDesc>
          <ProfileImg src={avatar} alt={username} />
          <ProfileName>{username}</ProfileName>
          <ProfileTag>@{tag}</ProfileTag>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileDesc>
        <ProfileStats>
          <ProfileStatsList>
            <ProfileStatsLable>Followers</ProfileStatsLable>
            <ProfileStatsQuantity>{followers}</ProfileStatsQuantity>
          </ProfileStatsList>
          <ProfileStatsList>
            <ProfileStatsLable>Views</ProfileStatsLable>
            <ProfileStatsQuantity>{views}</ProfileStatsQuantity>
          </ProfileStatsList>
          <ProfileStatsList>
            <ProfileStatsLable>Likes</ProfileStatsLable>
            <ProfileStatsQuantity>{likes}</ProfileStatsQuantity>
          </ProfileStatsList>
        </ProfileStats>
      </ProfileWrap>
    </ProfileFrame>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
