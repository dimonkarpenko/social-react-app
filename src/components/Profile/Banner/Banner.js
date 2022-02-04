import s from './Banner.module.css'


const Banner = () => {
    return (
        <div>
            <img className={s.cover} src='https://assets.unenvironment.org/styles/article_billboard_image/s3/2021-05/alberta-2297204_1920.jpg?h=1483c54f&amp;itok=GdjA9GRu' />
        </div>
    );
}

export default Banner;