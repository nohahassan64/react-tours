import React, { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa';
import { AiOutlineCloseSquare } from 'react-icons/ai'
import "./Tour.scss"

const Tour = ({ id , img , name , city , body , removeTours}) => {
    const [showInfo , setShowInfo] = useState(false)
    return (
        <article className="tour">
            <div className="img-container">
                <img src={img} alt={name}  />
                <span className="close" onClick={ () => removeTours(id)}>
                    <FaRegWindowClose />
                </span>
            </div>
            <div className="tour-info">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    Info {" "}
                    <span onClick={ () => setShowInfo(!showInfo)}>
                        <AiOutlineCloseSquare />
                    </span>
                </h5>
                {showInfo && <p>{body}</p>}
            </div>
        </article>
    )
}

export default Tour


