import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/container.module.css'
import imageImport from '../assets/image/pngwing.com.png'

function Main() {

    const image = {
        backgroundImage: `url(${imageImport})`,
        backgroundSize: 'cover',
    }

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContent}`}>
                <div className={style.mainText}>
                    <h1>Hi There</h1>
                    <p> I'm Michael Novitckiy and I'm learning Frontend. You see my <strong>portfolio</strong> now.</p>
                </div>
                <div style={image} className={style.photo}>
                </div>
            </div>
        </div>
    );
}

export default Main;
