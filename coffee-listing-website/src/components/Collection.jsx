import React, { useState } from 'react'
import starIcon from "../assets/star_fill.svg"
import tranStarIcon from "../assets/star.svg"
import './collection.css'

const Collection = ({ item }) => {
    const isSoldOut = item.name === "Chocolate Coffee";
    return (
        <div className='main'>
            <div className="imageWrapper">
                <img src={item.image} alt="" />
                {item.popular ? <h2 className="badge">Popular</h2> : ""}
            </div>

            <div className='descripition'>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
            </div>
            
            <div className='ratingIfo'>
                <div className='voteInfo'>
                    <img src={item.rating ? starIcon : tranStarIcon} alt="" />
                    <p>{item.rating ? item.rating + `(${item.votes} votes)` : "no rating"}</p>
                </div>
                {isSoldOut && <p>"Sold out"</p>}
            </div>
        </div>
    )
}

export default Collection