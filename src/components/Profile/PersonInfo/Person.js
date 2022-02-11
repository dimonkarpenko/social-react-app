import s from "./Person.module.css";

const Person = () => {
    return (
        <div className={s.infoPerson}>
            <div>
                <img className={s.personImg} src="https://www.meme-arsenal.com/memes/862d2a9a2265a4524f51655a5f5dacb5.jpg" />
            </div>
        </div>
    );
}

export default Person;