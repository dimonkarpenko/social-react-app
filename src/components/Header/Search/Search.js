import s from './Search.module.css';
;


const Search = () => {
    return (
        <div>
            <input className={s.form} placeholder='Search something' />
        </div>
    );
}

export default Search;