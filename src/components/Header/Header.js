import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.wrapper}>
            <Logo />
            <Search />
            <Menu />
        </header>
    );
}

export default Header;