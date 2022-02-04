import Banner from "./Banner/Banner";
import Person from "./PersonInfo/Person";
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className='app-content'>
            <Banner />
            <Person />
            <Posts />
        </div>
    );
}

export default Profile;