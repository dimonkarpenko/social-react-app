import Person from "./PersonInfo/Person";
import Posts from "./Posts/Posts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_menu}>
                <Person />
                <Posts />
            </div>
        </div>
    );
}

export default Profile;