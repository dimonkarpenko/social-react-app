import { NavLink } from 'react-router-dom';
import s from './Menu.module.css'

const Menu = () => {
    return (
        <div className={s.menu}>
            <div className={s.item}>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? s.selected : undefined
                    }
                >
                    Profile
                </NavLink>
                <NavLink
                    to="/videos"
                    className={({ isActive }) =>
                        isActive ? s.selected : undefined
                    }
                >
                    Videos
                </NavLink>
                <NavLink
                    to="/news"
                    className={({ isActive }) =>
                        isActive ? s.selected : undefined
                    }
                >
                    News
                </NavLink>
                <NavLink
                    to="/music"
                    className={({ isActive }) =>
                        isActive ? s.selected : undefined
                    }
                >
                    Music
                </NavLink>
                <NavLink
                    to="/dialogs"
                    className={({ isActive }) =>
                        isActive ? s.selected : undefined
                    }
                >
                    Dialogs
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;