import React from 'react'
import s from './Block.module.sass'

export const ExperiencesBlock = (props) => {
    return (
        <div className={`${s.block}`} data-aos="fade-in">
            <div className={`${s.content} ${s.expBlocksColor}`}>
                <div className={s.blockIcon}> </div>
                <div className={s.blockArrow}> </div>
                <div className={s.postTitle}>
                    <h4 className={s.expPosition}>{props.exp.position}</h4>
                </div>
                <div className={s.postSubtitle}>
                    company name: <span> {props.exp.companyName}</span> <br/>
                    from: <span> {props.exp.from}</span> to: <span> {props.exp.to}</span>
                </div>
                <div className={s.postContent}>
                    <p>{props.exp.description}</p>
                </div>
            </div>
        </div>
    )
}