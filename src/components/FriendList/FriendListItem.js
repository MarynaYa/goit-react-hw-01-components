import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListenItem({ id, avatar, name, isOnline }) {
return <li className={s.spanitem} key={id}>
  <span className={`${s.status} ${s[isOnline]}`}>{isOnline}</span>
 <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
 <p className={s.name}>{name}</p>
</li>
};
