import React from "react";
import style from './Main.module.scss';
import imageImport from '../assets/image/pngwing.com.png'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {
    const image = {
        backgroundImage: `url(${imageImport})`,
        backgroundSize: 'cover',
    }

    return (
        <div className={style.mainBlock} id='main'>
            <Fade button>
                <div className={style.container}>
                    <div className={style.mainContent}>
                        <div className={style.mainText}>
                            <h1><ReactTypingEffect
                                text={["Hi There"]}/></h1>
                            <p> I'm <strong>Michael Novitckiy</strong> and I'm learning Frontend. You see
                                my portfolio now.
                            </p>
                        </div>
                        <Tilt className="Tilt" options={{ max : 25 }} >
                            <div style={image} className={style.photo}></div>
                        </Tilt>

                    </div>
                </div>
            </Fade>
        </div>
    )
        ;
}

export default Main;
