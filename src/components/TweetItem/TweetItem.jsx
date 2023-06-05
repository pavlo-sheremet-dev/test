import PropTypes from 'prop-types';
import logo from 'logo.svg';
import pictureQuestion from 'picture-question.png';
import {
  Avatar,
  FollowingBtn,
  Line,
  LogoGoIt,
  PictureQuestion,
  TweetInfo,
  TweetInfoWrap,
  TweetWrap,
} from './TweetItem.styled';
import formatNumber from 'services/formatNumber';
import { useDispatch } from 'react-redux';
import { updateFollowers } from 'store/users/usersOperations';
import { useUsers } from 'hooks/useUsers';
import { follow, unfollow } from 'store/tweets/tweetSlice';

const TweetItem = ({ id, user, tweets, followers, avatar }) => {
  const { followerIds } = useUsers();
  const dispatch = useDispatch();

  const handleFollowClick = () => {
    const toggleFollowing = following ? followers - 1 : followers + 1;
    const updatedFollower = { id, followers: toggleFollowing };

    dispatch(updateFollowers(updatedFollower));

    if (!following) {
      dispatch(follow(id));
    } else {
      dispatch(unfollow(id));
    }
  };

  const followedUser = id => followerIds.indexOf(id) !== -1;
  const following = followedUser(id);

  return (
    <TweetWrap>
      <a href="https://www.goit.global">
        <LogoGoIt src={logo} alt="Logotype of Go-IT School" />
      </a>
      <PictureQuestion
        src={pictureQuestion}
        alt="picture with a question and an answer"
        width="308px"
      />
      <Avatar src={avatar} alt={user} width="80px" />
      <Line></Line>
      <TweetInfoWrap>
        <TweetInfo>Tweets: {formatNumber(tweets)}</TweetInfo>
        <TweetInfo>Followers: {formatNumber(followers)}</TweetInfo>
      </TweetInfoWrap>
      <FollowingBtn
        type="submit"
        following={following}
        onClick={handleFollowClick}
        style={{ backgroundColor: following ? '#5cd3a8' : '#ebd8ff' }}
      >
        {following ? 'Following' : 'Follow'}
      </FollowingBtn>
    </TweetWrap>
  );
};

export default TweetItem;

TweetItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
