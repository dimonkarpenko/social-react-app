import s from './Menu.module.css'

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.item}>Home</div>
            <div className={s.item}>Videos</div>
            <div className={s.item}>News</div>
            <div className={s.item}>Music</div>
            <div className={s.item}>Smthng else</div>
        </div>
    );
}

export default Menu;