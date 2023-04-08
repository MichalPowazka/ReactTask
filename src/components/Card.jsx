import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.item.imageUrl}className="card--image"/>
            <div className="card--info">
                <div className="card--topInfo">
                    <span  className="card--countryName"><img src="./public/images/pointPlace.png" className="card--img"/>{props.item.location}</span>
                    <span className="card--view">View on Google Maps</span>
                </div>
                <h2 className="card--place">{props.item.title}</h2>
                <span className="card--date">{props.item.startDate } - {props.item.endDate}</span>
                <span className="card--describe">{props.item.description}</span>
            </div>
        </div>
    )
}