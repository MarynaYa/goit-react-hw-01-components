import {Profile} from './Profile/Profile';
import user from '../data/user.json';

import {Statistics} from './Statistics/Statististics';
import data from '../data/data.json';

import s from '../index.css';


export const App = () => {
  return (
    <div className='container'>
    <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
    />
  <Statistics title="Upload stats" stats={data} />


</div>
  );
};
