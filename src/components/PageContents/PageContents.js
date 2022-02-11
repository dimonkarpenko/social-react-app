import Post from "../Profile/Posts/Post/Post";
import s from "./PageContents.module.css";

const PageContents = () => {
    return (
        <div className={s.content}>
            <Post message='Hao!' />
            <Post message='Chief!' />
            <Post message='How are you?' />
        </div>
    );
}

export default PageContents;