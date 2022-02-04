import s from './Logo.module.css'

const Logo = () => {
    return (
        <div>
            <img className={s.logo} src='https://www.pngarts.com/files/3/Logo-PNG-Image-Background.png'/>
        </div>
    );
}

export default Logo;