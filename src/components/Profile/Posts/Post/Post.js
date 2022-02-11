import s from './Post.module.css'


const Post = (props) => {

    console.log(props.message, props)

    return (
        <div className={s.post}>
            <img className={s.avatar} src="https://www.meme-arsenal.com/memes/862d2a9a2265a4524f51655a5f5dacb5.jpg" />
            {props.message}
        </div>
    );
}

export default Post;