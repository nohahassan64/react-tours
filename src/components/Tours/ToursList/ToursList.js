import React , { useState } from 'react'
import { dataTours } from "../../../data"
import Tour from '../Tour/Tour'
import "./ToursList.scss"

const ToursList = () => {
    const [ tours , setTours] = useState(dataTours);
    const removeTours = id => {
        const sortedTours = tours.filter( tour => tour.id !== id);
        setTours(sortedTours);
    }
    return (
        <section className="tour-list">
            {tours.map( item => {
                return(
                    <Tour key={item.id} {...item} removeTours={removeTours} />
                );
            })}
        </section>
    )
}

export default ToursList
