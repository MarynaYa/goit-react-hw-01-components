import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListenItem from './FriendListItem';

export default function FriendList({ friends }) {
    return <ul className={s.friendList}>
 {friends.map(({ id, avatar, name, isOnline }) => (
    <FriendListenItem
key={id}
avatar={avatar}
name={name}
isOnline={isOnline}
/>
 )
 )}
</ul>
};

FriendList.propTypes = {
friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number, 
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
),
}