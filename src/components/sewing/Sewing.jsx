import {  Zirkles } from '../svg';
import style from './Sewing.module.css';

const PictureSewing = () => {
    return (<picture >
        <source srcSet="/siuvimas_750.webp" media="(max-width: 780px)" />
        <img className={style.img} src="/siuvimas_900.webp" loading='lazy' alt="suknelių siuvimas šiauliuose" />
    </picture>
    )
};
export function Sewing() {
    return (
        <div id='sewing' className={style.container}>
            <div><PictureSewing /></div>
            <div className={style.content}>
                <h2 className={style.h2}>Ateik su idėja, išeik su drabužiu!</h2>
                <p className={style.p}>Kiekvienas turi savo unikalų stilių, bet ne visada lengva jį rasti parduotuvėje. Čia mes įžengiame į žaidimą - siuvame pagal jūsų norus ir poreikius. Nesvarbu, ar tai būtų kostiumas su per dideliais atlapais, suknelė, kuri privers suktis galvas kiekviename žingsnyje, ar džemperis, kuriame norėtumėt praleisti visą žiemą, mes pasirūpinsime, kad tai taptų realybe.</p>
                <ul className={style.repairList}>
                    <li>Moteriškų drabužių siuvimas</li>
                    <li>Vyriškų drabužių siuvimas</li>
                    <li>Vaikiškų drabužių siuvimas</li>
                </ul>
                <div className={style.svg}><Zirkles /></div>
            </div>
        </div>
    );
}
