import React from 'react'
import './Cards.css'
import remove from './../assets/icons/remove.svg'
import alertCircle from './../assets/icons/alert-circle.svg'
import megaphone from './../assets/icons/megaphone.svg'

interface IProps {
    i: number;
    category: string;
    createdOn: string | any;
    title: string;
    id: string;
    handleOnClick: () => void;
}
const Cards = (props: IProps) => {

    return (
        <div key={props.i} className={`Toast Toast--${props.category}`}>
            <div style={{width: 200}}><span className='Icons'><img src={props.category === "success" ? megaphone : alertCircle} alt="" /></span>{props.category === "success" ? "Announcement" : "Event Error"}</div>
            <div style={{width: 150}}>{props.createdOn}</div>
            <div style={{width: 450, textAlign: "left"}}>{props.title}</div>
            <button className="Toast__button" type="button" onClick={() => props.handleOnClick()}
            >
                <img src={remove} />
            </button>
        </div>
    )
}

export default Cards