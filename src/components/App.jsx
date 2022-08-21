import ProfileCard from "./profileCard";
import user from 'user';

export const App = () => {
  return (
    <div>
<ProfileCard 
  avatar={user.avatar}
  username={user.username}
  tag={user.tag}
  location={user.location}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/>
    </div>
  );
};
