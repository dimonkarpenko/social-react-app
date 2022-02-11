import s from "./Posts.module.css";

const Posts = () => {
    return (
        <div className={s.textarea}>
            <textarea />
            <div>
                <button>Add New Post</button>
            </div>
        </div>
    );
}

export default Posts;