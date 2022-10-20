import Profil from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statististics';
import data from '../data/data.json';

export const App = () => {
  return (
    <div className='container'>
 <Profil key={user.username}
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
  <Statistics title="Upload stats" stats={data} />
</div>
  );
};
