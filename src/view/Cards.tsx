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
    handleOnClick: any;
}
const Cards = (props: IProps) => {
   
    return (
        <div key={props.i} className={`Toast Toast--${props.category}`}>

            <div><span className='Icons'><img src={props.category === "success" ? megaphone : alertCircle} alt="" /></span>{props.createdOn}</div>
            <main className="Toast__message">
                <p className="Toast__message-text">{props.title} </p>

            </main>

            <button className="Toast__button" type="button" onClick={(e) => props.handleOnClick(props.id, props.category)}
            >
                <img src={remove}/>
            </button>
        </div>
    )
}

export default Cards